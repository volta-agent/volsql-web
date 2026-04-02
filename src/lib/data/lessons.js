// VolSQL Web - Business-Focused SQL Lessons
// Each lesson teaches through a real work scenario

const lessons = [
  // ========== MODULE 1: GETTING DATA OUT ==========
  {
    id: 'm1-l1',
    module: 1,
    moduleTitle: 'Getting Data Out',
    lesson: 1,
    title: 'Your First Request',
    subtitle: 'When your boss needs a list, fast',
    scenario: `Your manager just Slacked you: "Can you pull a list of all our customers? Marketing needs it by EOD."

You've never written SQL before. The database looks intimidating. But you need to deliver.

This lesson teaches you the most useful SQL skill: getting data out.`,
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
    id: 'm1-l2',
    module: 1,
    moduleTitle: 'Getting Data Out',
    lesson: 2,
    title: 'Finding Specific Records',
    subtitle: 'When you need one customer, not all of them',
    scenario: `Support needs all orders for a specific customer: sarah.johnson@email.com

You don't want to scroll through 50,000 orders. You need to filter.`,
    concept: `# The WHERE Clause

To filter results, add WHERE:

\`\`\`sql
SELECT * FROM orders
WHERE customer_email = 'sarah.johnson@email.com';
\`\`\`

**How to think about it:**
- \`SELECT *\` = "show me everything"
- \`FROM orders\` = "from the orders table"
- \`WHERE\` = "but only if..."
- \`customer_email = '...'\` = "the email matches this value"

**Text vs Numbers:**
- Text needs quotes: \`name = 'Sarah'\`
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
    id: 'm1-l3',
    module: 1,
    moduleTitle: 'Getting Data Out',
    lesson: 3,
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
ORDER BY status ASC, created_at DESC;
\`\`\`
This sorts by status first, then by date within each status.`,
    exercise: `Get the top 5 orders by total amount, showing the order_id, customer_email, and total columns.`,
    hint: 'ORDER BY the total column in DESC order, then LIMIT to 5 results.',
    solution: 'SELECT order_id, customer_email, total FROM orders ORDER BY total DESC LIMIT 5;',
    validation: {
      mustContain: ['SELECT', 'order_id', 'customer_email', 'total', 'FROM', 'orders', 'ORDER BY', 'DESC', 'LIMIT', '5'],
      minRows: 1,
      maxRows: 5
    },
    proTip: 'For "most recent" records, ORDER BY created_at DESC LIMIT 10 is your friend.',
    commonErrors: [
      { error: 'Forgot DESC', fix: 'ORDER BY total → shows smallest first. Add DESC for largest first.' },
      { error: 'Wrong LIMIT position', fix: 'LIMIT comes after ORDER BY, not before' }
    ]
  },

  {
    id: 'm1-l4',
    module: 1,
    moduleTitle: 'Getting Data Out',
    lesson: 4,
    title: 'Date Filtering',
    subtitle: 'Last month\'s sales report',
    scenario: `Finance needs last month's revenue. You have an orders table with an order_date column.

Dates in SQL can be tricky. Let's make them easy.`,
    concept: `# Working with Dates

Date formats vary by database, but these patterns work everywhere:

**Last 30 days:**
\`\`\`sql
SELECT * FROM orders
WHERE order_date >= date('now', '-30 days');
\`\`\`

**Specific date range:**
\`\`\`sql
SELECT * FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';
\`\`\`

**Date format:** Always use YYYY-MM-DD (ISO 8601). It works in every database.

**Common date functions:**
- \`date('now')\` = today
- \`date('now', '-7 days')\` = a week ago
- \`date('now', 'start of month')\` = first day of this month

**Pro tip:** To compare just the date part (ignoring time), use date():
\`\`\`sql
WHERE date(order_date) = '2024-01-15'
\`\`\``,
    exercise: `Get all orders from January 2024. Use the BETWEEN operator with the order_date column.`,
    hint: 'Use WHERE order_date BETWEEN \'2024-01-01\' AND \'2024-01-31\'. Date format is YYYY-MM-DD.',
    solution: "SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';",
    validation: {
      mustContain: ['SELECT', 'FROM', 'orders', 'WHERE', 'order_date', 'BETWEEN', '2024-01'],
      minRows: 1
    },
    proTip: 'When someone says "last month", clarify: calendar month or rolling 30 days? The queries are different.',
    commonErrors: [
      { error: 'Wrong date format', fix: "Use '2024-01-15' not '01/15/2024' or '15-01-2024'" },
      { error: 'BETWEEN includes both endpoints', fix: 'BETWEEN \'2024-01-01\' AND \'2024-01-31\' includes Jan 31' }
    ]
  },

  // ========== MODULE 2: COMBINING DATA ==========
  {
    id: 'm2-l1',
    module: 2,
    moduleTitle: 'Combining Data',
    lesson: 1,
    title: 'Your First JOIN',
    subtitle: 'When one table isn\'t enough',
    scenario: `You need a report showing customer names next to their order totals.

Customer names are in the customers table. Orders are in the orders table. How do you combine them?`,
    concept: `# JOIN: Connecting Tables

Tables are often related:
- \`customers\` table has customer info (id, name, email)
- \`orders\` table has order info (id, customer_id, total)

The \`customer_id\` in orders links to \`id\` in customers.

**JOIN syntax:**
\`\`\`sql
SELECT customers.name, orders.total
FROM orders
JOIN customers ON orders.customer_id = customers.id;
\`\`\`

**How to read it:**
- \`FROM orders\` = start with orders
- \`JOIN customers\` = connect to customers table
- \`ON orders.customer_id = customers.id\` = match where they link

**Pro tip:** Use table aliases for cleaner queries:
\`\`\`sql
SELECT c.name, o.total
FROM orders o
JOIN customers c ON o.customer_id = c.id;
\`\`\``,
    exercise: `Show customer names and their order totals by joining customers and orders tables. The orders table has a customer_id that links to customers.id.`,
    hint: 'SELECT c.name, o.total FROM orders o JOIN customers c ON o.customer_id = c.id',
    solution: 'SELECT c.name, o.total FROM orders o JOIN customers c ON o.customer_id = c.id;',
    validation: {
      mustContain: ['SELECT', 'JOIN', 'ON', 'customer_id'],
      minRows: 1
    },
    proTip: 'When someone asks for "data from multiple tables", they usually need a JOIN.',
    commonErrors: [
      { error: 'Forgot the ON clause', fix: 'JOIN customers ON orders.customer_id = customers.id (not just JOIN customers)' },
      { error: 'Ambiguous column', fix: 'When both tables have "id", specify: customers.id or orders.id' }
    ]
  },

  {
    id: 'm2-l2',
    module: 2,
    moduleTitle: 'Combining Data',
    lesson: 2,
    title: 'When Records Might Be Missing',
    subtitle: 'LEFT JOIN for the real world',
    scenario: `Marketing wants a list of ALL customers and their order counts - including customers who haven't ordered yet.

Regular JOIN drops customers with no orders. You need LEFT JOIN.`,
    concept: `# LEFT JOIN: Keep All Rows from First Table

**JOIN types:**
- \`JOIN\` (INNER) = only rows that match in both tables
- \`LEFT JOIN\` = all rows from left table, matching from right (NULL if no match)

\`\`\`sql
SELECT c.name, COUNT(o.id) as order_count
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id;
\`\`\`

**When to use LEFT JOIN:**
- "Show all X and their Y" (some X might not have Y)
- Finding missing data: customers with no orders
- Checking data quality: are there orphaned records?

**Visual example:**
\`\`\`
customers          orders
id | name          customer_id | total
1  | Sarah         1           | 50
2  | Mike          1           | 30
3  | Emma          NULL        | NULL (no orders)
\`\`\`

LEFT JOIN keeps Emma with NULL values for order columns.`,
    exercise: `List all customers and their order totals. Include customers who haven't ordered (their total should be NULL or 0).`,
    hint: 'Use LEFT JOIN instead of JOIN. Start with FROM customers c LEFT JOIN orders o ON...',
    solution: 'SELECT c.name, o.total FROM customers c LEFT JOIN orders o ON c.id = o.customer_id;',
    validation: {
      mustContain: ['SELECT', 'LEFT JOIN', 'ON', 'customer_id'],
      minRows: 1
    },
    proTip: 'When you see "show all X, including those without Y", think LEFT JOIN.',
    commonErrors: [
      { error: 'Used JOIN instead of LEFT JOIN', fix: 'JOIN drops non-matching rows. LEFT JOIN keeps them.' },
      { error: 'Wrong table order', fix: 'LEFT JOIN customers → orders shows all customers. Swap order to show all orders.' }
    ]
  },

  // ========== MODULE 3: AGGREGATING DATA ==========
  {
    id: 'm3-l1',
    module: 3,
    moduleTitle: 'Aggregating Data',
    lesson: 1,
    title: 'Summarizing with Aggregates',
    subtitle: 'Revenue reports and metrics',
    scenario: `Your CEO asks: "What's our total revenue this quarter?"

You have 50,000 order rows. You don't want to sum them manually. Enter aggregate functions.`,
    concept: `# Aggregate Functions

Aggregate functions summarize data:

| Function | Purpose | Example |
|----------|---------|---------|
| \`COUNT()\` | Count rows | \`COUNT(*)\` = total rows |
| \`SUM()\` | Add values | \`SUM(total)\` = revenue |
| \`AVG()\` | Average | \`AVG(order_value)\` |
| \`MIN()\` | Smallest | \`MIN(created_at)\` = first order |
| \`MAX()\` | Largest | \`MAX(total)\` = biggest order |

\`\`\`sql
SELECT SUM(total) as total_revenue
FROM orders
WHERE order_date >= '2024-01-01';
\`\`\`

**Pro tip:** Always name your aggregates with AS:
\`\`\`sql
SELECT COUNT(*) as customer_count,
       SUM(total) as total_revenue,
       AVG(total) as average_order
FROM orders;
\`\`\`

Without aliases, columns show as "COUNT(*)" which is confusing in reports.`,
    exercise: `Calculate: 1) Total number of orders, 2) Sum of all order totals, 3) Average order value. Name them order_count, total_revenue, and avg_order.`,
    hint: 'SELECT COUNT(*) as order_count, SUM(total) as total_revenue, AVG(total) as avg_order FROM orders',
    solution: 'SELECT COUNT(*) as order_count, SUM(total) as total_revenue, AVG(total) as avg_order FROM orders;',
    validation: {
      mustContain: ['SELECT', 'COUNT', 'SUM', 'AVG', 'as'],
      minRows: 1,
      maxRows: 1
    },
    proTip: 'COUNT(*) counts all rows. COUNT(column) counts non-NULL values. They differ when you have NULLs.',
    commonErrors: [
      { error: 'Forgot AS alias', fix: 'SELECT SUM(total) → SELECT SUM(total) as total_revenue' },
      { error: 'Aggregate in WHERE', fix: "You can't use SUM in WHERE. Use HAVING after GROUP BY instead." }
    ]
  },

  {
    id: 'm3-l2',
    module: 3,
    moduleTitle: 'Aggregating Data',
    lesson: 2,
    title: 'Grouping for Insights',
    subtitle: 'Revenue by category, orders by status',
    scenario: `Marketing wants revenue by product category, not just total revenue.

You need to group similar rows together and calculate for each group.`,
    concept: `# GROUP BY: Aggregate by Category

GROUP BY splits data into groups, then calculates aggregates for each:

\`\`\`sql
SELECT category, SUM(total) as revenue
FROM orders
GROUP BY category;
\`\`\`

**How it works:**
1. Group rows by category
2. Calculate SUM for each group
3. Return one row per category

**Common patterns:**

Revenue by month:
\`\`\`sql
SELECT strftime('%Y-%m', order_date) as month,
       SUM(total) as revenue
FROM orders
GROUP BY month
ORDER BY month;
\`\`\`

Orders by status:
\`\`\`sql
SELECT status, COUNT(*) as count
FROM orders
GROUP BY status;
\`\`\`

**Rule:** Every column in SELECT must be either:
- In GROUP BY, or
- An aggregate function (SUM, COUNT, etc.)`,
    exercise: `Show the number of orders and total revenue for each order status. Group by the status column.`,
    hint: 'SELECT status, COUNT(*) as order_count, SUM(total) as revenue FROM orders GROUP BY status',
    solution: 'SELECT status, COUNT(*) as order_count, SUM(total) as revenue FROM orders GROUP BY status;',
    validation: {
      mustContain: ['SELECT', 'status', 'COUNT', 'SUM', 'GROUP BY', 'status'],
      minRows: 1
    },
    proTip: 'When someone says "break down by X" or "by each X", they want GROUP BY.',
    commonErrors: [
      { error: 'Column not in GROUP BY', fix: 'SELECT category, name, SUM(x) GROUP BY category → Error! Add name to GROUP BY or remove from SELECT' },
      { error: 'Used WHERE with aggregate', fix: 'Use HAVING to filter after grouping: HAVING SUM(total) > 1000' }
    ]
  },

  {
    id: 'm3-l3',
    module: 3,
    moduleTitle: 'Aggregating Data',
    lesson: 3,
    title: 'Filtering Groups',
    subtitle: 'Find categories with high revenue',
    scenario: `You want to find product categories with more than $10,000 in revenue.

WHERE doesn't work here because you need to filter by the aggregate (SUM), not individual rows.`,
    concept: `# HAVING: Filter After Grouping

WHERE filters rows before grouping.
HAVING filters groups after grouping.

\`\`\`sql
SELECT category, SUM(total) as revenue
FROM orders
GROUP BY category
HAVING SUM(total) > 10000;
\`\`\`

**Order of operations:**
1. FROM (get data)
2. WHERE (filter rows)
3. GROUP BY (create groups)
4. HAVING (filter groups)
5. SELECT (choose columns)
6. ORDER BY (sort)

**When to use each:**
- \`WHERE total > 100\` = filter individual orders over $100
- \`HAVING SUM(total) > 10000\` = filter categories with total over $10,000

**Pro tip:** You can combine both:
\`\`\`sql
SELECT category, SUM(total) as revenue
FROM orders
WHERE status = 'completed'  -- only completed orders
GROUP BY category
HAVING SUM(total) > 10000;  -- categories with $10k+ revenue
\`\`\``,
    exercise: `Find customers who have placed more than 5 orders. Show their customer_id and order count.`,
    hint: 'SELECT customer_id, COUNT(*) as order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 5',
    solution: 'SELECT customer_id, COUNT(*) as order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 5;',
    validation: {
      mustContain: ['SELECT', 'customer_id', 'COUNT', 'GROUP BY', 'customer_id', 'HAVING', 'COUNT', '> 5'],
      minRows: 1
    },
    proTip: '"Customers who bought X times" or "products with more than Y sales" = GROUP BY + HAVING',
    commonErrors: [
      { error: 'Used WHERE instead of HAVING', fix: 'WHERE COUNT(*) > 5 → Error! Use HAVING COUNT(*) > 5' },
      { error: 'Used alias in HAVING', fix: 'Some databases require HAVING COUNT(*) > 5, not HAVING order_count > 5' }
    ]
  },

  // ========== MODULE 4: ADVANCED PATTERNS ==========
  {
    id: 'm4-l1',
    module: 4,
    moduleTitle: 'Advanced Patterns',
    lesson: 1,
    title: 'Subqueries',
    subtitle: 'Queries within queries',
    scenario: `Find customers who spent more than the average customer.

First you need the average. Then you need to compare each customer to it. One query inside another.`,
    concept: `# Subqueries: Queries Inside Queries

A subquery is a query inside another query:

\`\`\`sql
SELECT name, total_spent
FROM customers
WHERE total_spent > (
    SELECT AVG(total_spent) FROM customers
);
\`\`\`

**How it works:**
1. Inner query runs first: \`SELECT AVG(total_spent) FROM customers\`
2. Returns a single value (e.g., 450)
3. Outer query uses that value: \`WHERE total_spent > 450\`

**Common subquery patterns:**

Compare to average:
\`\`\`sql
WHERE salary > (SELECT AVG(salary) FROM employees)
\`\`\`

Find records matching another table:
\`\`\`sql
WHERE customer_id IN (SELECT id FROM customers WHERE country = 'US')
\`\`\`

**Pro tip:** Subqueries can be slow on large tables. For better performance, use JOINs when possible.`,
    exercise: `Find orders where the total is greater than the average order total. Show order_id and total.`,
    hint: 'SELECT order_id, total FROM orders WHERE total > (SELECT AVG(total) FROM orders)',
    solution: 'SELECT order_id, total FROM orders WHERE total > (SELECT AVG(total) FROM orders);',
    validation: {
      mustContain: ['SELECT', 'WHERE', '>', '(', 'SELECT', 'AVG', ')'],
      minRows: 1
    },
    proTip: '"Better than average" or "top performers compared to typical" = subquery with AVG()',
    commonErrors: [
      { error: 'Subquery returns multiple rows', fix: 'Use IN instead of = if subquery returns multiple values' },
      { error: 'Too many parentheses', fix: 'Wrap subquery in one set of parens: WHERE x > (SELECT ...)' }
    ]
  },

  {
    id: 'm4-l2',
    module: 4,
    moduleTitle: 'Advanced Patterns',
    lesson: 2,
    title: 'CASE Expressions',
    subtitle: 'Categorizing data',
    scenario: `Marketing wants to segment customers: "High Value" (>$1000), "Medium" ($100-1000), "Low" (<$100).

SQL can categorize data with CASE.`,
    concept: `# CASE: Conditional Logic in SQL

CASE is like IF/ELSE for SQL:

\`\`\`sql
SELECT
    name,
    total_spent,
    CASE
        WHEN total_spent >= 1000 THEN 'High Value'
        WHEN total_spent >= 100 THEN 'Medium'
        ELSE 'Low'
    END as segment
FROM customers;
\`\`\`

**How it works:**
1. Evaluates each WHEN condition in order
2. Returns the THEN value for first true condition
3. If none match, returns ELSE (or NULL if no ELSE)

**Common uses:**
- Categorizing values into buckets
- Converting codes to labels: WHEN status = 1 THEN 'Active'
- Calculating different values: WHEN country = 'US' THEN price * 1.0 ELSE price * 1.2

**Pro tip:** You can use CASE in any clause:
\`\`\`sql
SELECT COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_count
FROM orders;
\`\`\``,
    exercise: `Categorize orders as: 'High' if total > 100, 'Medium' if total between 50-100, 'Low' if total < 50. Show order_id, total, and the category.`,
    hint: 'SELECT order_id, total, CASE WHEN total > 100 THEN \'High\' WHEN total >= 50 THEN \'Medium\' ELSE \'Low\' END as category FROM orders',
    solution: "SELECT order_id, total, CASE WHEN total > 100 THEN 'High' WHEN total >= 50 THEN 'Medium' ELSE 'Low' END as category FROM orders;",
    validation: {
      mustContain: ['SELECT', 'CASE', 'WHEN', 'THEN', 'END'],
      minRows: 1
    },
    proTip: '"Bucket these values" or "segment customers" or "categorize by X" = CASE expression',
    commonErrors: [
      { error: 'Forgot END', fix: 'CASE WHEN x THEN y END (always need END)' },
      { error: 'Order matters', fix: 'Put most specific conditions first. WHEN x > 100 THEN... must come before WHEN x > 50' }
    ]
  },

  {
    id: 'm4-l3',
    module: 4,
    moduleTitle: 'Advanced Patterns',
    lesson: 3,
    title: 'Common Table Expressions',
    subtitle: 'Breaking complex queries into steps',
    scenario: `You need a complex report: monthly revenue, compared to previous month, with growth percentage.

One giant query is hard to read and debug. CTEs let you build it step by step.`,
    concept: `# CTE: Common Table Expression

A CTE (WITH clause) defines a temporary result you can reference:

\`\`\`sql
WITH monthly_sales AS (
    SELECT
        strftime('%Y-%m', order_date) as month,
        SUM(total) as revenue
    FROM orders
    GROUP BY month
)
SELECT * FROM monthly_sales ORDER BY month;
\`\`\`

**Why use CTEs:**
1. **Readability** - break complex queries into steps
2. **Debugging** - test each part separately
3. **Reusability** - reference the same CTE multiple times

**Multiple CTEs:**
\`\`\`sql
WITH
    high_value AS (
        SELECT * FROM customers WHERE total_spent > 1000
    ),
    recent_orders AS (
        SELECT * FROM orders WHERE order_date > '2024-01-01'
    )
SELECT h.name, COUNT(r.id) as recent_orders
FROM high_value h
JOIN recent_orders r ON h.id = r.customer_id
GROUP BY h.id;
\`\`\`

**Pro tip:** CTEs make complex queries readable. Your future self (and teammates) will thank you.`,
    exercise: `Use a CTE to find customers with more than 5 orders, then join to get their names. Show customer name and order count.`,
    hint: 'WITH frequent_buyers AS (SELECT customer_id, COUNT(*) as cnt FROM orders GROUP BY customer_id HAVING COUNT(*) > 5) SELECT c.name, f.cnt FROM frequent_buyers f JOIN customers c ON f.customer_id = c.id',
    solution: 'WITH frequent_buyers AS (SELECT customer_id, COUNT(*) as cnt FROM orders GROUP BY customer_id HAVING COUNT(*) > 5) SELECT c.name, f.cnt FROM frequent_buyers f JOIN customers c ON f.customer_id = c.id;',
    validation: {
      mustContain: ['WITH', 'AS', 'SELECT', 'JOIN'],
      minRows: 1
    },
    proTip: '"This query is too complex" = time for a CTE. Each step gets its own SELECT.',
    commonErrors: [
      { error: 'Forgot comma between CTEs', fix: 'WITH a AS (...), b AS (...) - comma between multiple CTEs' },
      { error: 'Reference before definition', fix: 'CTEs must be defined before used. Define in order of dependency.' }
    ]
  }
];

// Quiz questions for end of each module
const quizzes = {
  1: {
    module: 1,
    title: 'Getting Data Out - Quiz',
    questions: [
      {
        question: 'Which query gets all columns from the products table?',
        options: ['SELECT ALL FROM products', 'SELECT * FROM products', 'GET * FROM products', 'SELECT products.*'],
        correct: 1,
        explanation: 'SELECT * retrieves all columns. It\'s the standard SQL way.'
      },
      {
        question: 'What\'s wrong with: SELECT name FROM users WHERE city = Paris?',
        options: ['Nothing, it\'s correct', 'Paris needs quotes', 'Should use == not =', 'WHERE must come before SELECT'],
        correct: 1,
        explanation: 'Text values need quotes: WHERE city = \'Paris\''
      },
      {
        question: 'How do you get the 10 most recent orders?',
        options: ['SELECT * FROM orders LIMIT 10', 'SELECT * FROM orders ORDER BY created_at DESC LIMIT 10', 'SELECT TOP 10 * FROM orders', 'SELECT * FROM orders ORDER BY created_at LIMIT 10'],
        correct: 1,
        explanation: 'ORDER BY created_at DESC sorts newest first, LIMIT 10 takes the top 10.'
      }
    ]
  },
  2: {
    module: 2,
    title: 'Combining Data - Quiz',
    questions: [
      {
        question: 'When would you use LEFT JOIN instead of JOIN?',
        options: ['When tables have the same columns', 'When you want all rows from the first table, even without matches', 'When joining more than 2 tables', 'LEFT JOIN is always better'],
        correct: 1,
        explanation: 'LEFT JOIN keeps all rows from the left table. Use it when you don\'t want to lose records that have no match.'
      },
      {
        question: 'What connects two tables in a JOIN?',
        options: ['The LINK clause', 'The ON clause with matching columns', 'They must have the same name', 'The CONNECT keyword'],
        correct: 1,
        explanation: 'ON specifies how tables relate: ON orders.customer_id = customers.id'
      }
    ]
  },
  3: {
    module: 3,
    title: 'Aggregating Data - Quiz',
    questions: [
      {
        question: 'What\'s the difference between WHERE and HAVING?',
        options: ['They\'re the same', 'WHERE filters rows, HAVING filters groups', 'HAVING is faster', 'WHERE is deprecated'],
        correct: 1,
        explanation: 'WHERE filters individual rows before grouping. HAVING filters after GROUP BY aggregates results.'
      },
      {
        question: 'Which query correctly shows revenue by category?',
        options: ['SELECT category, SUM(total) FROM orders', 'SELECT category, SUM(total) FROM orders GROUP BY category', 'SELECT SUM(total), category FROM orders', 'SELECT category, total FROM orders GROUP BY category'],
        correct: 1,
        explanation: 'When using aggregates like SUM(), non-aggregated columns must be in GROUP BY.'
      }
    ]
  },
  4: {
    module: 4,
    title: 'Advanced Patterns - Quiz',
    questions: [
      {
        question: 'What does a CASE expression do?',
        options: ['Switches between databases', 'Adds conditional logic to queries', 'Creates new tables', 'Handles errors'],
        correct: 1,
        explanation: 'CASE lets you categorize data or apply conditional logic, like IF/ELSE in other languages.'
      },
      {
        question: 'Why use a CTE (WITH clause)?',
        options: ['It\'s faster than subqueries', 'It makes complex queries more readable', 'It\'s required by SQL standard', 'It creates permanent tables'],
        correct: 1,
        explanation: 'CTEs break complex queries into readable steps. Great for debugging and sharing with teammates.'
      }
    ]
  }
};

// Real-world query templates users can copy
const queryTemplates = [
  {
    name: 'Daily Active Users',
    description: 'Count unique users who performed an action today',
    query: `SELECT COUNT(DISTINCT user_id) as daily_active_users
FROM events
WHERE date(created_at) = date('now');`
  },
  {
    name: 'Revenue by Month',
    description: 'Monthly revenue trend for dashboards',
    query: `SELECT
    strftime('%Y-%m', order_date) as month,
    SUM(total) as revenue,
    COUNT(*) as orders
FROM orders
WHERE status = 'completed'
GROUP BY month
ORDER BY month;`
  },
  {
    name: 'Customer Cohort Analysis',
    description: 'First purchase month for each customer',
    query: `SELECT
    strftime('%Y-%m', first_order) as cohort,
    COUNT(*) as customers
FROM (
    SELECT customer_id, MIN(order_date) as first_order
    FROM orders
    GROUP BY customer_id
)
GROUP BY cohort
ORDER BY cohort;`
  },
  {
    name: 'Top Products by Revenue',
    description: 'Best-selling products for inventory decisions',
    query: `SELECT
    p.name,
    COUNT(*) as units_sold,
    SUM(oi.quantity * oi.price) as revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id
GROUP BY p.id
ORDER BY revenue DESC
LIMIT 10;`
  },
  {
    name: 'Churned Customers',
    description: 'Customers who haven\'t ordered in 90 days',
    query: `SELECT c.email, c.name, MAX(o.order_date) as last_order
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id
HAVING MAX(o.order_date) < date('now', '-90 days')
   OR MAX(o.order_date) IS NULL;`
  },
  {
    name: 'Average Order Value by Segment',
    description: 'Compare spending across customer segments',
    query: `SELECT
    CASE
        WHEN total_orders >= 10 THEN 'VIP'
        WHEN total_orders >= 3 THEN 'Regular'
        ELSE 'New'
    END as segment,
    AVG(avg_order_value) as aov,
    COUNT(*) as customers
FROM (
    SELECT
        customer_id,
        COUNT(*) as total_orders,
        AVG(total) as avg_order_value
    FROM orders
    GROUP BY customer_id
)
GROUP BY segment;`
  }
];

export { lessons, quizzes, queryTemplates };
export default lessons;
