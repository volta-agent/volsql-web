// SQL execution engine using sql.js (SQLite in WebAssembly)
import initSqlJs from 'sql.js';

let db = null;
let SQL = null;

// Northwind-style business database schema
const SCHEMA_SQL = `
  -- Customers table
  CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    country TEXT,
    city TEXT,
    total_spent REAL DEFAULT 0,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  -- Products table
  CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    price REAL,
    stock INTEGER DEFAULT 0
  );

  -- Orders table
  CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    total REAL,
    status TEXT DEFAULT 'pending',
    order_date TEXT,
    shipping_country TEXT,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
  );

  -- Order items (for JOIN practice)
  CREATE TABLE order_items (
    id INTEGER PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER,
    quantity INTEGER,
    price REAL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
  );

  -- Events table (for DAU/MAU calculations)
  CREATE TABLE events (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    event_type TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`;

const SEED_SQL = `
  -- Insert customers
  INSERT INTO customers (id, name, email, country, city, total_spent, created_at) VALUES
  (1, 'Sarah Johnson', 'sarah.johnson@email.com', 'USA', 'New York', 2450.00, '2023-06-15'),
  (2, 'Michael Chen', 'michael.chen@email.com', 'USA', 'San Francisco', 1890.50, '2023-07-20'),
  (3, 'Emma Wilson', 'emma.wilson@email.com', 'UK', 'London', 3200.00, '2023-05-10'),
  (4, 'David Kumar', 'david.kumar@email.com', 'India', 'Mumbai', 950.25, '2023-08-01'),
  (5, 'Lisa Müller', 'lisa.muller@email.com', 'Germany', 'Berlin', 1575.80, '2023-04-25'),
  (6, 'James Smith', 'james.smith@email.com', 'USA', 'Chicago', 4200.00, '2023-03-12'),
  (7, 'Ana Garcia', 'ana.garcia@email.com', 'Spain', 'Madrid', 890.00, '2023-09-05'),
  (8, 'Yuki Tanaka', 'yuki.tanaka@email.com', 'Japan', 'Tokyo', 2680.00, '2023-02-28'),
  (9, 'Robert Brown', 'robert.brown@email.com', 'USA', 'Boston', 1340.50, '2023-07-15'),
  (10, 'Maria Rossi', 'maria.rossi@email.com', 'Italy', 'Rome', 1950.75, '2023-06-01'),
  (11, 'New Customer', 'new.customer@email.com', 'USA', 'Seattle', 0, '2024-01-15'),
  (12, 'Inactive User', 'inactive@email.com', 'UK', 'Manchester', 150.00, '2023-01-01'),
  (13, 'Frequent Buyer', 'frequent@email.com', 'Canada', 'Toronto', 8500.00, '2022-11-20'),
  (14, 'Budget Shopper', 'budget@email.com', 'USA', 'Austin', 220.00, '2023-10-10'),
  (15, 'VIP Customer', 'vip@email.com', 'USA', 'Miami', 12500.00, '2022-05-15');

  -- Insert products
  INSERT INTO products (id, name, category, price, stock) VALUES
  (1, 'Laptop Pro 15', 'Electronics', 1299.99, 45),
  (2, 'Wireless Mouse', 'Electronics', 29.99, 200),
  (3, 'USB-C Hub', 'Electronics', 49.99, 150),
  (4, 'Standing Desk', 'Furniture', 599.00, 30),
  (5, 'Ergonomic Chair', 'Furniture', 349.99, 25),
  (6, 'Monitor 27"', 'Electronics', 399.99, 60),
  (7, 'Mechanical Keyboard', 'Electronics', 149.99, 80),
  (8, 'Desk Lamp', 'Furniture', 79.99, 100),
  (9, 'Webcam HD', 'Electronics', 89.99, 120),
  (10, 'Notebook Set', 'Office', 24.99, 300),
  (11, 'Pen Collection', 'Office', 19.99, 250),
  (12, 'Desk Organizer', 'Office', 34.99, 90);

  -- Insert orders
  INSERT INTO orders (id, customer_id, total, status, order_date, shipping_country) VALUES
  (1, 1, 1329.98, 'completed', '2024-01-15', 'USA'),
  (2, 1, 79.98, 'shipped', '2024-01-20', 'USA'),
  (3, 2, 599.00, 'completed', '2024-01-10', 'USA'),
  (4, 3, 399.99, 'completed', '2024-01-05', 'UK'),
  (5, 4, 249.98, 'pending', '2024-01-22', 'India'),
  (6, 5, 179.98, 'shipped', '2024-01-18', 'Germany'),
  (7, 6, 1299.99, 'completed', '2024-01-08', 'USA'),
  (8, 7, 89.99, 'cancelled', '2024-01-12', 'Spain'),
  (9, 8, 549.98, 'completed', '2024-01-03', 'Japan'),
  (10, 9, 149.99, 'shipped', '2024-01-21', 'USA'),
  (11, 10, 429.98, 'completed', '2024-01-17', 'Italy'),
  (12, 1, 349.99, 'pending', '2024-01-25', 'USA'),
  (13, 13, 1899.97, 'completed', '2024-01-02', 'Canada'),
  (14, 13, 229.98, 'completed', '2024-01-10', 'Canada'),
  (15, 13, 649.98, 'shipped', '2024-01-19', 'Canada'),
  (16, 13, 149.99, 'completed', '2024-01-05', 'Canada'),
  (17, 13, 79.98, 'completed', '2024-01-12', 'Canada'),
  (18, 13, 99.98, 'pending', '2024-01-24', 'Canada'),
  (19, 15, 2599.97, 'completed', '2024-01-01', 'USA'),
  (20, 3, 129.98, 'shipped', '2024-01-23', 'UK'),
  (21, 6, 849.98, 'completed', '2024-01-14', 'USA'),
  (22, 2, 149.99, 'completed', '2024-01-19', 'USA'),
  (23, 8, 199.98, 'cancelled', '2024-01-11', 'Japan'),
  (24, 9, 79.98, 'completed', '2024-01-20', 'USA'),
  (25, 10, 59.98, 'shipped', '2024-01-22', 'Italy'),
  -- Older orders for date filtering practice
  (26, 1, 249.98, 'completed', '2023-12-15', 'USA'),
  (27, 2, 399.99, 'completed', '2023-12-20', 'USA'),
  (28, 3, 179.98, 'completed', '2023-11-25', 'UK'),
  (29, 6, 599.00, 'completed', '2023-12-01', 'USA'),
  (30, 8, 1299.99, 'completed', '2023-11-15', 'Japan');

  -- Insert order items (for JOIN practice)
  INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
  (1, 1, 1, 1299.99),
  (1, 2, 1, 29.99),
  (2, 3, 1, 49.99),
  (2, 2, 1, 29.99),
  (3, 4, 1, 599.00),
  (4, 6, 1, 399.99),
  (5, 10, 5, 24.99),
  (5, 11, 5, 19.99),
  (6, 8, 2, 79.99),
  (6, 12, 1, 34.99),
  (7, 1, 1, 1299.99),
  (9, 5, 1, 349.99),
  (9, 7, 1, 149.99),
  (9, 3, 1, 49.99),
  (10, 7, 1, 149.99),
  (11, 6, 1, 399.99),
  (11, 2, 1, 29.99),
  (12, 5, 1, 349.99),
  (13, 1, 1, 1299.99),
  (13, 6, 1, 399.99),
  (13, 4, 1, 599.00),
  (14, 7, 1, 149.99),
  (14, 3, 1, 49.99),
  (14, 2, 1, 29.99),
  (15, 5, 1, 349.99),
  (15, 6, 1, 399.99),
  (16, 7, 1, 149.99),
  (17, 2, 2, 29.99),
  (17, 10, 1, 24.99),
  (19, 1, 2, 1299.99);

  -- Insert events (for DAU/MAU)
  INSERT INTO events (user_id, event_type, created_at) VALUES
  (1, 'login', '2024-01-20 08:30:00'),
  (1, 'purchase', '2024-01-20 09:15:00'),
  (2, 'login', '2024-01-20 10:00:00'),
  (3, 'login', '2024-01-20 10:30:00'),
  (3, 'view_product', '2024-01-20 10:45:00'),
  (4, 'login', '2024-01-20 11:00:00'),
  (5, 'login', '2024-01-20 11:30:00'),
  (5, 'purchase', '2024-01-20 12:00:00'),
  (6, 'login', '2024-01-20 12:30:00'),
  (1, 'login', '2024-01-21 08:00:00'),
  (2, 'login', '2024-01-21 09:00:00'),
  (2, 'purchase', '2024-01-21 09:30:00'),
  (6, 'login', '2024-01-21 10:00:00'),
  (7, 'login', '2024-01-21 10:30:00'),
  (8, 'login', '2024-01-21 11:00:00'),
  (1, 'login', '2024-01-22 08:15:00'),
  (3, 'login', '2024-01-22 09:00:00'),
  (5, 'login', '2024-01-22 09:30:00'),
  (9, 'login', '2024-01-22 10:00:00'),
  (10, 'login', '2024-01-22 10:30:00');
`;

export async function initSql() {
  if (db) return;
  
  try {
    // Use local WASM file for better browser compatibility
    SQL = await initSqlJs({
      locateFile: file => `/${file}`
    });
    
    db = new SQL.Database();
    
    // Create schema and seed data
    db.run(SCHEMA_SQL);
    db.run(SEED_SQL);
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    throw error;
  }
}

export function runQuery(sql) {
  if (!db) throw new Error('Database not initialized');
  
  try {
    const results = db.exec(sql);
    
    if (results.length === 0) {
      return { columns: [], rows: [] };
    }
    
    return {
      columns: results[0].columns,
      rows: results[0].values
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getSchema() {
  const tables = [
    { name: 'customers', columns: ['id', 'name', 'email', 'country', 'city', 'total_spent', 'created_at'] },
    { name: 'products', columns: ['id', 'name', 'category', 'price', 'stock'] },
    { name: 'orders', columns: ['id', 'customer_id', 'total', 'status', 'order_date', 'shipping_country'] },
    { name: 'order_items', columns: ['id', 'order_id', 'product_id', 'quantity', 'price'] },
    { name: 'events', columns: ['id', 'user_id', 'event_type', 'created_at'] }
  ];
  
  return tables;
}

export { db };
