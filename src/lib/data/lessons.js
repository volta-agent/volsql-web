// VolSQL Web - Business-Focused SQL Lessons
// Each lesson teaches through a real work scenario

const lessons = [
 // ========== MODULE 1: GETTING DATA OUT ==========
 {
 id: 'm1-l1',
 module: 1,
 moduleTitle: 'Getting Data Out',
 lesson: 1,
 title: 'What\'s In This Database?',
 subtitle: 'Before you query, you need to know what exists',
 scenario: `It's your first day. Someone hands you a database connection and says "pull the customer list."

But you've never seen this database before. You don't know what tables exist or what columns they have.

First rule of SQL: **explore before you query**.`,
 concept: `# Discovering Your Database

Every database has a schema - a map of what's inside. You need to find it.

**In SQLite (what we're using), try this:**

\`\`\`sql
SELECT name FROM sqlite_master WHERE type='table';
\`\`\`

This shows all table names. You'll see: customers, products, orders, order_items, events

**To see columns in a table:**

\`\`\`sql
PRAGMA table_info(customers);
\`\`\`

This reveals: id, name, email, country, city, total_spent, created_at

**In other databases:**
- PostgreSQL: \`SELECT * FROM information_schema.columns WHERE table_name = 'customers';\`
- MySQL: \`DESCRIBE customers;\`
- SQL Server: \`sp_help customers;\`

The syntax varies, but the goal is the same: know your data before you query it.`,
 exercise: `Explore the database. Run a query to list all table names.

Hint: Use sqlite_master with type='table'`,
 hint: 'SELECT name FROM sqlite_master WHERE type=\'table\';',
 solution: "SELECT name FROM sqlite_master WHERE type='table';",
 validation: {
 mustContain: ['SELECT', 'sqlite_master', 'table'],
 minRows: 1
 },
 proTip: 'Most SQL tools have a schema browser in the UI. But knowing the query lets you script it - useful for documentation or audits.',
 commonErrors: [
 { error: 'Forgot the WHERE clause', fix: 'Without WHERE type=\'table\', you\'ll get indexes and triggers too' },
 { error: 'Wrong column name', fix: 'sqlite_master has: name, type, tbl_name, sql - use name for table names' }
 ]
 },

 {
 id: 'm1-l2',
 module: 1,
 moduleTitle: 'Getting Data Out',
 lesson: 2,
 title: 'Your First Data Pull',
 subtitle: 'When your boss needs a list, fast',
 scenario: `Your manager just Slacked you: "Can you pull a list of all our customers? Marketing needs it by EOD."

Now that you know the database has a \`customers\` table with columns: id, name, email, country, city, total_spent, created_at

You're ready to get data.`,
 concept: `# The SELECT Statement

SQL is how you ask a database for information. The basic pattern is:

\`\`\`sql
SELECT column_name FROM table_name;
\`\`\`

Think of it like Excel:
- **Table** = a sheet (like "Customers")
- **Column** = a column (like "email", "name")
- **Row** = one record (one customer)

To get all columns, use \`*\`:
\`\`\`sql
SELECT * FROM customers;
\`\`\`

**Pro tip:** Avoid \`SELECT *\` in production queries. It's slow on large tables. Specify the columns you need:
\`\`\`sql
SELECT name, email FROM customers;
\`\`\``,
 exercise: `The marketing team needs customer names and emails for a campaign.

Write a query to get the \`name\` and \`email\` columns from the \`customers\` table.`,
 hint: 'Start with SELECT, then the column names separated by commas, then FROM, then the table name.',
 solution: 'SELECT name, email FROM customers;',
 validation: {
 mustContain: ['SELECT', 'name', 'email', 'FROM', 'customers'],
 minRows: 1
 },
 proTip: 'When sharing query results, export as CSV (most SQL tools have this). Non-technical colleagues can open it in Excel.',
 commonErrors: [
 { error: 'Missing comma between columns', fix: 'SELECT name email FROM customers → SELECT name, email FROM customers' },
 { error: 'Wrong table name', fix: 'Check spelling - table names are case-sensitive in some databases' }
 ]
 },

 {
 id: 'm1-l3',
 module: 1,
 moduleTitle: 'Getting Data Out',
 lesson: 3,
 title: 'Finding Specific Records',
 subtitle: 'When you need one customer, not all of them',
 scenario: `Support needs all orders for a specific customer.

You don't want to scroll through all orders. You need to filter.`,
 concept: `# The WHERE Clause

To filter results, add WHERE:

\`\`\`sql
SELECT * FROM orders
WHERE customer_id = 1;
\`\`\`

**How to think about it:**
- \`SELECT *\` = "show me everything"
- \`FROM orders\` = "from the orders table"
- \`WHERE\` = "but only if..."
- \`customer_id = 1\` = "the customer_id matches this value"

**Text vs Numbers:**
- Text needs quotes: \`status = 'shipped'\`
- Numbers don't: \`order_id = 1234\`

**Multiple conditions:**
\`\`\`sql
SELECT * FROM orders
WHERE status = 'pending'
AND total > 100;
\`\`\``,
 exercise: `Find all orders where the status is 'shipped' and the total is greater than 50.`,
 hint: 'Use WHERE with two conditions connected by AND. Remember: text needs quotes, numbers don\'t.',
 solution: "SELECT * FROM orders WHERE status = 'shipped' AND total > 50;",
 validation: {
 mustContain: ['SELECT', 'FROM', 'orders', 'WHERE', 'status', 'shipped', 'AND', 'total', '>', '50'],
 minRows: 1
 },
 proTip: 'When filtering by text, use LIKE for partial matches: WHERE email LIKE \'%@gmail.com\' finds all Gmail users.',
 commonErrors: [
 { error: 'Forgot quotes around text', fix: "WHERE status = shipped → WHERE status = 'shipped'" },
 { error: 'Used = instead of >', fix: 'WHERE total = 100 finds exactly 100, WHERE total > 100 finds greater than' }
 ]
 },

 {
 id: 'm1-l4',
 module: 1,
 moduleTitle: 'Getting Data Out',
 lesson: 4,
 title: 'Sorting and Limiting',
 subtitle: 'Finding the biggest spenders',
 scenario: `Marketing wants to send a special offer to your top 10 customers by total spend.

You need to sort by revenue and show only the top results.`,
 concept: `# ORDER BY and LIMIT

Sort results with ORDER BY:
\`\`\`sql
SELECT * FROM customers
ORDER BY total_spent DESC;
\`\`\`

- \`ASC\` = ascending (1, 2, 3... or A, B, C...)
- \`DESC\` = descending (highest first)

Limit results with LIMIT:
\`\`\`sql
SELECT * FROM customers
ORDER BY total_spent DESC
LIMIT 10;
\`\`\`

**Combine them:**
1. First sort (ORDER BY)
2. Then take top N (LIMIT)

**Pro tip:** You can sort by multiple columns:
\`\`\`sql
SELECT * FROM orders
ORDER BY status ASC, order_date DESC;
\`\`\`
This sorts by status first, then by date within each status.`,
 exercise: `Get the top 5 orders by total amount, showing the id, customer_id, and total columns.`,
 hint: 'ORDER BY the total column in DESC order, then LIMIT to 5 results.',
 solution: 'SELECT id, customer_id, total FROM orders ORDER BY total DESC LIMIT 5;',
 validation: {
 mustContain: ['SELECT', 'FROM', 'orders', 'ORDER BY', 'DESC', 'LIMIT', '5'],
 minRows: 1,
 maxRows: 5
 },
 proTip: 'For "most recent" records, ORDER BY order_date DESC LIMIT 10 is your friend.',
 commonErrors: [
 { error: 'Forgot DESC', fix: 'ORDER BY total → shows smallest first. Add DESC for largest first.' },
 { error: 'Wrong LIMIT position', fix: 'LIMIT comes after ORDER BY, not before' }
 ]
 },

 {
 id: 'm1-l5',
 module: 1,
 moduleTitle: 'Getting Data Out',
 lesson: 5,
 title: 'Date Filtering',
 subtitle: 'Last month\'s sales report',
 scenario: `Finance needs last month's revenue. You have an orders table with an order_date column.

Dates in SQL can be tricky. Let's make them easy.`,
 concept: `# Working with Dates

Date formats vary by database, but these patterns work everywhere:

\`\`\`sql
-- Orders from a specific date
SELECT * FROM orders
WHERE order_date = '2024-01-15';

-- Orders after a date
SELECT * FROM orders
WHERE order_date >= '2024-01-01';

-- Orders in a date range
SELECT * FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';
\`\`\`

**Common date functions:**

SQLite: \`date('now')\`, \`date('now', '-7 days')\`
PostgreSQL: \`CURRENT_DATE\`, \`NOW() - INTERVAL '7 days'\`
MySQL: \`CURDATE()\`, \`DATE_SUB(NOW(), INTERVAL 7 DAY)\`

**Pro tip:** Always store dates as DATE or DATETIME columns, not text. It enables proper filtering and sorting.`,
 exercise: `Find all orders placed in January 2024 (between '2024-01-01' and '2024-01-31').`,
 hint: 'Use BETWEEN for date ranges. Dates need quotes and use YYYY-MM-DD format.',
 solution: "SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';",
 validation: {
 mustContain: ['SELECT', 'FROM', 'orders', 'order_date', 'BETWEEN', '2024-01'],
 minRows: 1
 },
 proTip: 'The ISO format YYYY-MM-DD works in every database. Avoid MM/DD/YYYY or DD/MM/YYYY - they cause confusion.',
 commonErrors: [
 { error: 'Wrong date format', fix: "Use '2024-01-15' not '01/15/2024' or '15-01-2024'" },
 { error: 'Forgot quotes', fix: "Dates need quotes: WHERE order_date = '2024-01-15'" }
 ]
 },

 // ========== MODULE 2: AGGREGATION ==========
 {
 id: 'm2-l1',
 module: 2,
 moduleTitle: 'Summarizing Data',
 lesson: 1,
 title: 'Counting and Summing',
 subtitle: 'How many orders? How much revenue?',
 scenario: `Your boss asks: "How many orders did we get last month? What's the total revenue?"

You don't want to count rows manually. Let SQL do the math.`,
 concept: `# Aggregate Functions

SQL can summarize data with aggregate functions:

\`\`\`sql
-- Count rows
SELECT COUNT(*) FROM orders;

-- Sum values
SELECT SUM(total) FROM orders;

-- Average
SELECT AVG(total) FROM orders;

-- Min and Max
SELECT MIN(total), MAX(total) FROM orders;
\`\`\`

**Combine with filtering:**
\`\`\`sql
SELECT COUNT(*) FROM orders
WHERE status = 'shipped';
\`\`\`

This counts only shipped orders.

**Multiple aggregates at once:**
\`\`\`sql
SELECT
 COUNT(*) as total_orders,
 SUM(total) as revenue,
 AVG(total) as average_order
FROM orders;
\`\`\`

The \`as\` keyword names your results.`,
 exercise: `Calculate the total revenue (sum of total) and average order value from the orders table.`,
 hint: 'Use SUM(total) and AVG(total). Give them meaningful names with AS.',
 solution: 'SELECT SUM(total) as total_revenue, AVG(total) as average_order_value FROM orders;',
 validation: {
 mustContain: ['SELECT', 'SUM', 'AVG', 'FROM', 'orders'],
 minRows: 1
 },
 proTip: 'COUNT(column) counts non-null values. COUNT(*) counts all rows including nulls.',
 commonErrors: [
 { error: 'Forgot FROM', fix: 'SELECT COUNT(*) orders → SELECT COUNT(*) FROM orders' },
 { error: 'Mixed aggregates wrong', fix: 'SELECT COUNT(SUM(total)) → invalid. Use one aggregate at a time.' }
 ]
 },

 {
 id: 'm2-l2',
 module: 2,
 moduleTitle: 'Summarizing Data',
 lesson: 2,
 title: 'Grouping Data',
 subtitle: 'Revenue by country, orders by status',
 scenario: `Marketing wants to know: which countries are our top markets?

You need to group orders by country and sum the revenue for each.`,
 concept: `# GROUP BY

GROUP BY splits data into buckets and calculates aggregates for each:

\`\`\`sql
SELECT shipping_country, SUM(total) as revenue
FROM orders
GROUP BY shipping_country;
\`\`\`

This returns one row per country with its total revenue.

**How to think about it:**
1. GROUP BY creates buckets (one per country)
2. Each bucket gets aggregated (SUM, COUNT, etc.)
3. You get one result row per bucket

**Multiple groups:**
\`\`\`sql
SELECT shipping_country, status, COUNT(*) as count
FROM orders
GROUP BY shipping_country, status;
\`\`\`

This shows order counts by country AND status.`,
 exercise: `Show the number of orders by shipping_country. Include the country and count columns.`,
 hint: 'Use GROUP BY shipping_country with COUNT(*).',
 solution: 'SELECT shipping_country, COUNT(*) as order_count FROM orders GROUP BY shipping_country;',
 validation: {
 mustContain: ['SELECT', 'shipping_country', 'COUNT', 'FROM', 'orders', 'GROUP BY'],
 minRows: 1
 },
 proTip: 'Every column in SELECT must either be in GROUP BY or be an aggregate function.',
 commonErrors: [
 { error: 'Selected non-grouped column', fix: 'SELECT name, COUNT(*) GROUP BY status → name is not grouped' },
 { error: 'Forgot GROUP BY', fix: 'Without GROUP BY, aggregates collapse to one row' }
 ]
 },

 {
 id: 'm2-l3',
 module: 2,
 moduleTitle: 'Summarizing Data',
 lesson: 3,
 title: 'Filtering Groups',
 subtitle: 'Top performing countries only',
 scenario: `Your report shows 50 countries, but most have tiny revenue. Boss wants to focus on markets with $500+ in sales.

You need to filter after grouping.`,
 concept: `# HAVING

WHERE filters rows before grouping. HAVING filters groups after grouping.

\`\`\`sql
-- Wrong: Can't use WHERE with aggregates
SELECT shipping_country, SUM(total)
FROM orders
WHERE SUM(total) > 500  -- ERROR!
GROUP BY shipping_country;

-- Right: Use HAVING for group filters
SELECT shipping_country, SUM(total) as revenue
FROM orders
GROUP BY shipping_country
HAVING SUM(total) > 500;
\`\`\`

**The order matters:**
1. FROM (get data)
2. WHERE (filter rows)
3. GROUP BY (create groups)
4. HAVING (filter groups)
5. SELECT (choose columns)
6. ORDER BY (sort results)

**Combine WHERE and HAVING:**
\`\`\`sql
SELECT shipping_country, SUM(total) as revenue
FROM orders
WHERE status = 'shipped'  -- Only shipped orders
GROUP BY shipping_country
HAVING SUM(total) > 500;  -- Countries with $500+ shipped
\`\`\``,
 exercise: `Show shipping countries with total revenue over 500. Include country and revenue columns.`,
 hint: 'Use GROUP BY shipping_country, then HAVING SUM(total) > 500.',
 solution: 'SELECT shipping_country, SUM(total) as revenue FROM orders GROUP BY shipping_country HAVING SUM(total) > 500;',
 validation: {
 mustContain: ['SELECT', 'shipping_country', 'SUM', 'GROUP BY', 'HAVING'],
 minRows: 1
 },
 proTip: 'HAVING is like WHERE but for grouped results. Think: HAVING filters the output of GROUP BY.',
 commonErrors: [
 { error: 'Used WHERE instead of HAVING', fix: 'WHERE SUM(total) > 500 → HAVING SUM(total) > 500' },
 { error: 'Forgot GROUP BY', fix: 'HAVING only works after GROUP BY' }
 ]
 },

 // ========== MODULE 3: JOINS ==========
 {
 id: 'm3-l1',
 module: 3,
 moduleTitle: 'Combining Tables',
 lesson: 1,
 title: 'Why Joins Matter',
 subtitle: 'Your data lives in multiple tables',
 scenario: `You need a report showing order IDs with customer names.

But orders only have customer_id, not customer names. The names are in the customers table.

You need to join.`,
 concept: `# Understanding Joins

Real databases split data across tables:
- \`orders\` has: id, customer_id, total, status
- \`customers\` has: id, name, email

To get order details with customer names, you join:

\`\`\`sql
SELECT orders.id, customers.name, orders.total
FROM orders
JOIN customers ON orders.customer_id = customers.id;
\`\`\`

**How to read this:**
1. FROM orders (start with orders table)
2. JOIN customers (bring in customers table)
3. ON orders.customer_id = customers.id (match where they connect)
4. SELECT columns from both tables

**The connection:**
- \`orders.customer_id\` references \`customers.id\`
- This is a foreign key relationship
- JOIN finds matching rows in both tables`,
 exercise: `Show all orders with customer names. Include order id, customer name, and order total.`,
 hint: 'JOIN customers ON orders.customer_id = customers.id',
 solution: 'SELECT orders.id, customers.name, orders.total FROM orders JOIN customers ON orders.customer_id = customers.id;',
 validation: {
 mustContain: ['SELECT', 'FROM', 'orders', 'JOIN', 'customers', 'ON'],
 minRows: 1
 },
 proTip: 'Table aliases save typing: FROM orders o JOIN customers c ON o.customer_id = c.id',
 commonErrors: [
 { error: 'Ambiguous column', fix: 'SELECT id FROM orders JOIN customers → Which id? Use orders.id or customers.id' },
 { error: 'Wrong join condition', fix: 'ON orders.id = customers.id → Should be customer_id matches id' }
 ]
 },

 {
 id: 'm3-l2',
 module: 3,
 moduleTitle: 'Combining Tables',
 lesson: 2,
 title: 'Left Joins',
 subtitle: 'Include unmatched rows',
 scenario: `You want a report of all customers and their order counts.

But some customers haven't ordered yet. A regular JOIN would exclude them.

You need LEFT JOIN.`,
 concept: `# LEFT JOIN vs JOIN

**JOIN (INNER JOIN):** Only rows that match in both tables.

\`\`\`sql
SELECT c.name, o.id
FROM customers c
JOIN orders o ON c.id = o.customer_id;
\`\`\`
Only shows customers who have placed orders.

**LEFT JOIN:** All rows from left table, matching rows from right (or NULL if no match).

\`\`\`sql
SELECT c.name, o.id as order_id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;
\`\`\`
Shows ALL customers, with order_id NULL if they haven't ordered.

**When to use each:**
- JOIN: "Show me orders with customer info" (must have an order)
- LEFT JOIN: "Show me all customers and their orders" (include customers with zero orders)`,
 exercise: `List all customers and their order counts. Include customers with zero orders.`,
 hint: 'Use LEFT JOIN and COUNT. Group by customer.',
 solution: 'SELECT c.name, COUNT(o.id) as order_count FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY c.id, c.name;',
 validation: {
 mustContain: ['SELECT', 'FROM', 'customers', 'LEFT JOIN', 'orders', 'GROUP BY'],
 minRows: 1
 },
 proTip: 'COUNT(o.id) counts non-null values. COUNT(*) would count 1 even for customers with no orders.',
 commonErrors: [
 { error: 'Used JOIN instead of LEFT JOIN', fix: 'Missing customers who haven\'t ordered' },
 { error: 'Wrong COUNT', fix: 'COUNT(*) counts the group, use COUNT(o.id) to count actual orders' }
 ]
 },

 // ========== MODULE 4: ANALYTICS ==========
 {
 id: 'm4-l1',
 module: 4,
 moduleTitle: 'Real-World Analytics',
 lesson: 1,
 title: 'Daily Active Users',
 subtitle: 'How many users visit each day?',
 scenario: `Product wants to track daily active users (DAU).

The events table logs every user action with user_id and created_at.

You need to count unique users per day.`,
 concept: `# DISTINCT and Date Functions

**COUNT DISTINCT:** Count unique values.

\`\`\`sql
SELECT COUNT(DISTINCT user_id)
FROM events;
\`\`\`

This counts each user only once, no matter how many events they have.

**Combine with date grouping:**

\`\`\`sql
SELECT
 DATE(created_at) as date,
 COUNT(DISTINCT user_id) as unique_users
FROM events
GROUP BY DATE(created_at)
ORDER BY date;
\`\`\`

The DATE() function extracts just the date from a timestamp, grouping all events from the same day.`,
 exercise: `Count unique users per day from the events table. Show date and user count.`,
 hint: 'Use DATE(created_at) and COUNT(DISTINCT user_id) with GROUP BY.',
 solution: 'SELECT DATE(created_at) as date, COUNT(DISTINCT user_id) as unique_users FROM events GROUP BY DATE(created_at) ORDER BY date;',
 validation: {
 mustContain: ['SELECT', 'COUNT', 'DISTINCT', 'FROM', 'events', 'GROUP BY'],
 minRows: 1
 },
 proTip: 'DAU (Daily Active Users), WAU (Weekly), MAU (Monthly) are core product metrics.',
 commonErrors: [
 { error: 'Forgot DISTINCT', fix: 'COUNT(user_id) counts all events, not unique users' },
 { error: 'No date grouping', fix: 'GROUP BY DATE(created_at) to get daily breakdown' }
 ]
 },

 {
 id: 'm4-l2',
 module: 4,
 moduleTitle: 'Real-World Analytics',
 lesson: 2,
 title: 'Retention Basics',
 subtitle: 'Do users come back?',
 scenario: `You launched a new feature. Are users returning?

Retention measures what percentage of users return after their first visit.`,
 concept: `# Calculating Retention

Retention = Users who returned / Users who started

\`\`\`sql
-- Day 1 retention: returned the next day
WITH first_day AS (
 SELECT user_id, DATE(MIN(created_at)) as first_date
 FROM events
 GROUP BY user_id
),
returned AS (
 SELECT DISTINCT user_id, DATE(created_at) as visit_date
 FROM events
)
SELECT
 f.first_date,
 COUNT(DISTINCT f.user_id) as new_users,
 COUNT(DISTINCT CASE WHEN r.visit_date = f.first_date + 1 THEN f.user_id END) as returned_next_day
FROM first_day f
LEFT JOIN returned r ON f.user_id = r.user_id
GROUP BY f.first_date;
\`\`\`

**Simpler approach for learning:**
\`\`\`sql
-- Just see if users have multiple events
SELECT user_id, COUNT(DISTINCT DATE(created_at)) as active_days
FROM events
GROUP BY user_id
HAVING COUNT(DISTINCT DATE(created_at)) > 1;
\`\`\`

This shows users who were active on multiple days.`,
 exercise: `Find users who were active on more than one day. Show user_id and their active day count.`,
 hint: 'Group by user_id, count distinct dates, filter with HAVING > 1.',
 solution: 'SELECT user_id, COUNT(DISTINCT DATE(created_at)) as active_days FROM events GROUP BY user_id HAVING COUNT(DISTINCT DATE(created_at)) > 1;',
 validation: {
 mustContain: ['SELECT', 'user_id', 'COUNT', 'DISTINCT', 'DATE', 'GROUP BY', 'HAVING'],
 minRows: 1
 },
 proTip: 'Retention is the #1 metric for subscription products. High retention = product-market fit.',
 commonErrors: [
 { error: 'Counted events not days', fix: 'COUNT(*) counts events, use COUNT(DISTINCT DATE(created_at))' },
 { error: 'Wrong HAVING', fix: 'HAVING COUNT > 1 not WHERE COUNT > 1' }
 ]
 },

 {
 id: 'm4-l3',
 module: 4,
 moduleTitle: 'Real-World Analytics',
 lesson: 3,
 title: 'Revenue Metrics',
 subtitle: 'Average Order Value and more',
 scenario: `E-commerce teams track Average Order Value (AOV) religiously.

Higher AOV = more revenue without more customers.

Let's calculate it by country to find our best markets.`,
 concept: `# Business Metrics in SQL

**Average Order Value (AOV):**
\`\`\`sql
SELECT AVG(total) as aov FROM orders;
\`\`\`

**AOV by segment:**
\`\`\`sql
SELECT shipping_country, AVG(total) as aov, COUNT(*) as orders
FROM orders
GROUP BY shipping_country
ORDER BY aov DESC;
\`\`\`

**Total Customer Value (TCV) - how much each customer has spent:**
\`\`\`sql
SELECT c.name, SUM(o.total) as total_spent
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
ORDER BY total_spent DESC;
\`\`\`

These metrics drive business decisions.`,
 exercise: `Calculate AOV by shipping_country. Show country, average order value, and order count. Sort by AOV descending.`,
 hint: 'Use AVG(total), COUNT(*), GROUP BY shipping_country, ORDER BY.',
 solution: 'SELECT shipping_country, AVG(total) as aov, COUNT(*) as orders FROM orders GROUP BY shipping_country ORDER BY aov DESC;',
 validation: {
 mustContain: ['SELECT', 'shipping_country', 'AVG', 'COUNT', 'GROUP BY', 'ORDER BY'],
 minRows: 1
 },
 proTip: 'Combine metrics: Revenue = Users × Conversion Rate × AOV. SQL can calculate each.',
 commonErrors: [
 { error: 'Used SUM instead of AVG', fix: 'AVG(total) for average, SUM(total) for total' },
 { error: 'Forgot ORDER BY', fix: 'Add ORDER BY aov DESC to see highest AOV first' }
 ]
 }
];

// Query templates - copy-paste ready queries for common tasks
export const queryTemplates = [
 {
 name: 'List All Tables',
 description: 'See what tables exist in the database',
 query: "SELECT name FROM sqlite_master WHERE type='table';"
 },
 {
 name: 'Describe a Table',
 description: 'See columns in a specific table',
 query: 'PRAGMA table_info(customers);'
 },
 {
 name: 'Count Records',
 description: 'How many rows in a table',
 query: 'SELECT COUNT(*) as count FROM customers;'
 },
 {
 name: 'Top 10 by Value',
 description: 'Get highest values from any column',
 query: 'SELECT * FROM customers ORDER BY total_spent DESC LIMIT 10;'
 },
 {
 name: 'Filter by Date Range',
 description: 'Records between two dates',
 query: "SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';"
 },
 {
 name: 'Group and Count',
 description: 'Count records per category',
 query: 'SELECT status, COUNT(*) as count FROM orders GROUP BY status;'
 },
 {
 name: 'Join Tables',
 description: 'Combine data from two tables',
 query: 'SELECT c.name, o.total FROM customers c JOIN orders o ON c.id = o.customer_id;'
 },
 {
 name: 'Find Duplicates',
 description: 'Find records with same values',
 query: 'SELECT email, COUNT(*) as count FROM customers GROUP BY email HAVING count > 1;'
 }
];

export default lessons;
