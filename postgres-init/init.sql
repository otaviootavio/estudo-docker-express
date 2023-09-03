CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(100),
    age INT
);

INSERT INTO employees (name, position, age)
VALUES 
    ('John Doe', 'Software Engineer', 30),
    ('Jane Smith', 'Product Manager', 32),
    ('Alice', 'Data Scientist', 28);
