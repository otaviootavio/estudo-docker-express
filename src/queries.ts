import { Response } from "express";
import { Pool } from "pg";
import { Employee } from "./types";

const pool:Pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || "5432"),
  });

  const getUsers = async (response: Response): Promise<void> => {
    const results = await pool.query('SELECT * FROM public.employees ORDER BY id ASC');
    response.json( results.rows );
  }

  const addEmployee = async (employee: Employee): Promise<Employee> => {
    const query = 'INSERT INTO public.employees (name, position, age) VALUES ($1, $2, $3) RETURNING *';
    const values = [employee.name, employee.position, employee.age];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
   

export {getUsers, addEmployee}