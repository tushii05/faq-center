export const mySQLQuestions = [{
    question: "1. What is MySQL?",
    answer: "MySQL is an open-source relational database management system (RDBMS) that uses Structured Query Language (SQL) to manage and manipulate databases."
},
{
    question: "2. How do you create a database in MySQL?",
    answer: "You can create a database using the `CREATE DATABASE` command: `CREATE DATABASE database_name;`."
},
{
    question: "3. How do you select a database in MySQL?",
    answer: "Use the `USE` command: `USE database_name;`."
},
{
    question: "4. What is a primary key?",
    answer: "A primary key is a unique identifier for a row in a table. It cannot contain NULL values and must be unique."
},
{
    question: "5. How do you create a table in MySQL?",
    answer: "Use the `CREATE TABLE` command: `CREATE TABLE table_name (column1 datatype, column2 datatype, ...);`."
},
{
    question: "6. What is the difference between CHAR and VARCHAR?",
    answer: "CHAR is fixed-length, while VARCHAR is variable-length. CHAR pads spaces to fill the length, whereas VARCHAR uses only the required space."
},
{
    question: "7. How do you insert data into a table?",
    answer: "Use the `INSERT INTO` command: `INSERT INTO table_name (column1, column2) VALUES (value1, value2);`."
},
{
    question: "8. How do you update data in a table?",
    answer: "Use the `UPDATE` command: `UPDATE table_name SET column1 = value1 WHERE condition;`."
},
{
    question: "9. How do you delete data from a table?",
    answer: "Use the `DELETE FROM` command: `DELETE FROM table_name WHERE condition;`."
},
{
    question: "10. What is the SELECT statement used for?",
    answer: "The SELECT statement retrieves data from one or more tables: `SELECT column1, column2 FROM table_name;`."
},
{
    question: "11. What is the WHERE clause used for?",
    answer: "The WHERE clause filters records based on a specified condition: `SELECT * FROM table_name WHERE condition;`."
},
{
    question: "12. What is the difference between DELETE and TRUNCATE?",
    answer: "DELETE removes rows one by one and can have a WHERE clause, while TRUNCATE removes all rows at once and resets auto-increment counters."
},
{
    question: "13. What is a foreign key?",
    answer: "A foreign key is a column that references the primary key of another table, establishing a relationship between two tables."
},
{
    question: "14. How do you add a column to an existing table?",
    answer: "Use the `ALTER TABLE` command: `ALTER TABLE table_name ADD column_name datatype;`."
},
{
    question: "15. What is the ORDER BY clause used for?",
    answer: "ORDER BY sorts the result set in ascending (ASC) or descending (DESC) order: `SELECT * FROM table_name ORDER BY column_name ASC;`."
},
{
    question: "16. What is the GROUP BY clause used for?",
    answer: "GROUP BY groups rows that have the same values into summary rows, often used with aggregate functions like COUNT, SUM, etc."
},
{
    question: "17. What is the difference between COUNT(*) and COUNT(column_name)?",
    answer: "COUNT(*) counts all rows, including NULLs, while COUNT(column_name) counts only non-NULL values in the specified column."
},
{
    question: "18. What is the LIKE operator used for?",
    answer: "LIKE is used for pattern matching with wildcards: `%` (zero or more characters) and `_` (single character)."
},
{
    question: "19. What is the IN operator used for?",
    answer: "IN allows specifying multiple values in a WHERE clause: `SELECT * FROM table_name WHERE column_name IN (value1, value2);`."
},
{
    question: "20. What is a JOIN in MySQL?",
    answer: "A JOIN combines rows from two or more tables based on a related column between them."
},
//Intermediate Level MySQL Questions:
{
    question: "21. What are the different types of JOINs in MySQL?",
    answer: "MySQL supports INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL JOIN (or FULL OUTER JOIN)."
},
{
    question: "22. What is the difference between INNER JOIN and LEFT JOIN?",
    answer: "INNER JOIN returns only matching rows from both tables, while LEFT JOIN returns all rows from the left table and matching rows from the right table (NULL if no match)."
},
{
    question: "23. What is a self-join?",
    answer: "A self-join is a join where a table is joined with itself, useful for querying hierarchical data or comparing rows within the same table."
},
{
    question: "24. What is an index in MySQL?",
    answer: "An index improves the speed of data retrieval operations by providing quick access to rows in a table."
},
{
    question: "25. How do you create an index?",
    answer: "Use the `CREATE INDEX` command: `CREATE INDEX index_name ON table_name (column_name);`."
},
{
    question: "26. What is a composite index?",
    answer: "A composite index is an index on multiple columns, improving query performance for conditions involving those columns."
},
{
    question: "27. What is a stored procedure?",
    answer: "A stored procedure is a precompiled collection of SQL statements stored in the database for reuse."
},
{
    question: "28. How do you create a stored procedure?",
    answer: "Use the `CREATE PROCEDURE` command: `CREATE PROCEDURE procedure_name() BEGIN ... END;`."
},
{
    question: "29. What is a trigger in MySQL?",
    answer: "A trigger is a set of SQL statements that automatically executes in response to a specific event (INSERT, UPDATE, DELETE) on a table."
},
{
    question: "30. How do you create a trigger?",
    answer: "Use the `CREATE TRIGGER` command: `CREATE TRIGGER trigger_name BEFORE/AFTER INSERT/UPDATE/DELETE ON table_name FOR EACH ROW BEGIN ... END;`."
},
{
    question: "31. What is a view in MySQL?",
    answer: "A view is a virtual table based on the result set of a SQL query, simplifying complex queries and enhancing security."
},
{
    question: "32. How do you create a view?",
    answer: "Use the `CREATE VIEW` command: `CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;`."
},
{
    question: "33. What is normalization?",
    answer: "Normalization is the process of organizing data to minimize redundancy by dividing tables and defining relationships between them."
},
{
    question: "34. What are the different normal forms?",
    answer: "The main normal forms are 1NF (First Normal Form), 2NF (Second Normal Form), 3NF (Third Normal Form), and BCNF (Boyce-Codd Normal Form)."
},
{
    question: "35. What is denormalization?",
    answer: "Denormalization is the process of intentionally introducing redundancy to improve read performance, often used in data warehousing."
},
{
    question: "36. What is a transaction in MySQL?",
    answer: "A transaction is a sequence of SQL operations executed as a single unit, ensuring data integrity (either all succeed or none)."
},
{
    question: "37. What are ACID properties?",
    answer: "ACID stands for Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don't interfere), and Durability (committed changes persist)."
},
{
    question: "38. How do you start and commit a transaction?",
    answer: "Use `START TRANSACTION;` to begin, `COMMIT;` to save changes, or `ROLLBACK;` to undo them."
},
{
    question: "39. What is a subquery?",
    answer: "A subquery is a query nested inside another query, used to return data for the main query."
},
{
    question: "40. What is the difference between a subquery and a JOIN?",
    answer: "A subquery executes first and returns a result to the outer query, while a JOIN combines data from multiple tables in a single query."
},
//Hard Level MySQL Questions:
{
    question: "41. What is a deadlock in MySQL?",
    answer: "A deadlock occurs when two or more transactions wait indefinitely for each other to release locks, causing a standstill."
},
{
    question: "42. How can you prevent deadlocks?",
    answer: "Avoid long transactions, access tables in the same order, use appropriate isolation levels, and keep transactions small."
},
{
    question: "43. What is the difference between MyISAM and InnoDB?",
    answer: "MyISAM is faster for read-heavy operations but lacks transactions and foreign keys, while InnoDB supports ACID transactions, row-level locking, and foreign keys."
},
{
    question: "44. What is partitioning in MySQL?",
    answer: "Partitioning divides a table into smaller, more manageable pieces (partitions) while treating it as a single table."
},
{
    question: "45. What are the types of partitioning?",
    answer: "Common types include RANGE, LIST, HASH, and KEY partitioning."
},
{
    question: "46. What is query optimization in MySQL?",
    answer: "Query optimization improves query performance using techniques like indexing, EXPLAIN analysis, and avoiding full table scans."
},
{
    question: "47. How does the EXPLAIN statement work?",
    answer: "EXPLAIN shows the execution plan of a query, helping identify performance bottlenecks like missing indexes or full scans."
},
{
    question: "48. What is a covering index?",
    answer: "A covering index includes all columns needed for a query, eliminating the need to access the actual table data."
},
{
    question: "49. What is a cursor in MySQL?",
    answer: "A cursor is a database object used to retrieve and manipulate rows one at a time, typically in stored procedures."
},
{
    question: "50. What is the difference between UNION and UNION ALL?",
    answer: "UNION combines and removes duplicate rows, while UNION ALL combines all rows (including duplicates)."
},
{
    question: "51. What is a full-text search in MySQL?",
    answer: "Full-text search allows efficient searching of text data using specialized indexes and MATCH() AGAINST() syntax."
},
{
    question: "52. What is the difference between a clustered and non-clustered index?",
    answer: "A clustered index determines the physical order of data (only one per table), while a non-clustered index is a separate structure pointing to the data."
},
{
    question: "53. What is the purpose of the SQL_CALC_FOUND_ROWS option?",
    answer: "SQL_CALC_FOUND_ROWS counts the total number of rows matching a query (ignoring LIMIT), retrievable via FOUND_ROWS()."
},
{
    question: "54. How do you handle slow queries in MySQL?",
    answer: "Use EXPLAIN to analyze, add indexes, optimize queries, avoid SELECT *, and consider caching or hardware upgrades."
},
{
    question: "55. What is the difference between a temporary table and a derived table?",
    answer: "A temporary table is explicitly created and stored temporarily, while a derived table is a subquery in the FROM clause."
},
{
    question: "56. What is the purpose of the SQL_MODE setting?",
    answer: "SQL_MODE configures MySQL's behavior for data validation, strict mode, and compatibility with other databases."
},
{
    question: "57. What is a prepared statement?",
    answer: "A prepared statement is a precompiled SQL query that improves performance and security by separating SQL logic from data."
},
{
    question: "58. How do you use prepared statements in MySQL?",
    answer: "Use PREPARE, EXECUTE, and DEALLOCATE PREPARE: `PREPARE stmt FROM 'SELECT * FROM table WHERE id=?'; EXECUTE stmt USING @id;`."
},
{
    question: "59. What is the difference between a stored procedure and a function?",
    answer: "A stored procedure performs actions and may return multiple values, while a function returns a single value and can be used in SQL expressions."
},
{
    question: "60. What is the purpose of the EVENT scheduler in MySQL?",
    answer: "The EVENT scheduler automates the execution of SQL statements at scheduled intervals, similar to a cron job."
},
{
    question: "61. What is a strict data structure?",
    answer: "A strict data structure requires a fixed schema where each record must follow the same format. It's used in relational databases like MySQL where data types and structure are predefined and enforced."
}
]