import { Response } from "express";
import pool from "../db";
import { Employee } from "../types";

export const getAllUsersModel = async (
  response: Response
): Promise<Employee[]> => {
  const results = await pool.query(
    "SELECT * FROM public.employees ORDER BY id ASC"
  );
  return results.rows as Employee[];
};

export const addEmployeeModel = async (
  employee: Employee
): Promise<Employee> => {
  const query =
    "INSERT INTO public.employees (name, position, age) VALUES ($1, $2, $3) RETURNING *";
  const values = [employee.name, employee.position, employee.age];
  const result = await pool.query(query, values);
  return result.rows[0] as Employee;
};
