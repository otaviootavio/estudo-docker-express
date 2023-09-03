import { Response } from "express";
import { Pool } from "pg";

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
   

export {getUsers}