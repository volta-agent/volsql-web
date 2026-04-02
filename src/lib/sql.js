// SQL execution engine using sql.js (SQLite in WebAssembly)
// sql.js is loaded via script tag in index.html

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
 status TEXT,
 order_date TEXT,
 shipping_country TEXT,
 FOREIGN KEY (customer_id) REFERENCES customers(id)
 );

 -- Order items table
 CREATE TABLE order_items (
 id INTEGER PRIMARY KEY,
 order_id INTEGER,
 product_id INTEGER,
 quantity INTEGER,
 price REAL,
 FOREIGN KEY (order_id) REFERENCES orders(id),
 FOREIGN KEY (product_id) REFERENCES products(id)
 );

 -- Events table (for analytics lessons)
 CREATE TABLE events (
 id INTEGER PRIMARY KEY,
 user_id INTEGER,
 event_type TEXT,
 created_at TEXT
 );
`;

// Sample data for lessons
const SEED_SQL = `
 -- Sample customers
 INSERT INTO customers (name, email, country, city, total_spent) VALUES
 ('Sarah Johnson', 'sarah.johnson@email.com', 'USA', 'New York', 1250.00),
 ('Mike Chen', 'mike.chen@email.com', 'Canada', 'Toronto', 890.50),
 ('Emma Wilson', 'emma.wilson@email.com', 'UK', 'London', 2100.00),
 ('Carlos Rodriguez', 'carlos.rodriguez@email.com', 'Spain', 'Madrid', 450.00),
 ('Lisa Thompson', 'lisa.thompson@email.com', 'USA', 'Los Angeles', 3200.00),
 ('Hans Mueller', 'hans.mueller@email.com', 'Germany', 'Berlin', 780.00),
 ('Marie Dubois', 'marie.dubois@email.com', 'France', 'Paris', 1650.00),
 ('John Smith', 'john.smith@email.com', 'USA', 'Chicago', 520.00),
 ('Yuki Tanaka', 'yuki.tanaka@email.com', 'Japan', 'Tokyo', 2800.00),
 ('Anna Kowalski', 'anna.kowalski@email.com', 'Poland', 'Warsaw', 340.00);

 -- Sample products
 INSERT INTO products (name, category, price, stock) VALUES
 ('Laptop Pro', 'Electronics', 1299.99, 45),
 ('Wireless Mouse', 'Electronics', 29.99, 230),
 ('USB-C Hub', 'Electronics', 49.99, 120),
 ('Office Chair', 'Furniture', 249.99, 35),
 ('Standing Desk', 'Furniture', 599.99, 20),
 ('Monitor 27"', 'Electronics', 399.99, 55),
 ('Keyboard Mechanical', 'Electronics', 129.99, 80),
 ('Desk Lamp', 'Furniture', 39.99, 150),
 ('Webcam HD', 'Electronics', 79.99, 95),
 ('Headphones', 'Electronics', 199.99, 60);

 -- Sample orders
 INSERT INTO orders (customer_id, total, status, order_date, shipping_country) VALUES
 (1, 1329.98, 'shipped', '2024-01-15', 'USA'),
 (2, 249.99, 'delivered', '2024-01-16', 'Canada'),
 (3, 599.99, 'shipped', '2024-01-17', 'UK'),
 (1, 79.99, 'pending', '2024-01-18', 'USA'),
 (4, 1299.99, 'shipped', '2024-01-18', 'Spain'),
 (5, 449.98, 'delivered', '2024-01-19', 'USA'),
 (6, 129.99, 'pending', '2024-01-20', 'Germany'),
 (7, 199.99, 'shipped', '2024-01-20', 'France'),
 (8, 649.98, 'delivered', '2024-01-21', 'USA'),
 (9, 99.98, 'pending', '2024-01-22', 'Japan'),
 (3, 1299.99, 'shipped', '2024-01-22', 'UK'),
 (10, 39.99, 'delivered', '2024-01-22', 'Poland');

 -- Sample order_items
 INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
 (1, 1, 1, 1299.99),
 (1, 2, 1, 29.99),
 (2, 4, 1, 249.99),
 (3, 5, 1, 599.99),
 (4, 9, 1, 79.99),
 (5, 1, 1, 1299.99),
 (6, 6, 1, 399.99),
 (6, 2, 1, 29.99),
 (6, 3, 1, 49.99),
 (7, 7, 1, 129.99),
 (8, 10, 1, 199.99),
 (9, 5, 1, 599.99),
 (9, 8, 1, 39.99),
 (10, 2, 2, 29.99),
 (10, 3, 1, 49.99),
 (11, 1, 1, 1299.99),
 (12, 8, 1, 39.99);

 -- Sample events for analytics lessons
 INSERT INTO events (user_id, event_type, created_at) VALUES
 (1, 'login', '2024-01-20 08:00:00'),
 (2, 'login', '2024-01-20 09:00:00'),
 (1, 'purchase', '2024-01-20 10:00:00'),
 (3, 'login', '2024-01-20 11:00:00'),
 (4, 'login', '2024-01-20 12:00:00'),
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
    // Use global initSqlJs from script tag
    const initSqlJs = window.initSqlJs;
    if (!initSqlJs) {
      throw new Error('sql.js not loaded. Check script tag.');
    }
    
 // Determine base path for GitHub Pages vs local
 const basePath = window.location.pathname.includes('/volsql-web') ? '/volsql-web' : '';
 
 SQL = await initSqlJs({
 locateFile: file => `${basePath}/${file}`
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
