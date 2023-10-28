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

export const getEmployeeByIdModel = async (id: number): Promise<Employee> => {
  const query = "SELECT * FROM public.employees WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0] as Employee;
};

export const updateEmployeeByIdModel = async (employee: Employee): Promise<Employee> => {
  const query = "UPDATE public.employees SET name = $2, position = $3, age = $4 WHERE id = $1";
  const values = [employee.id, employee.name, employee.position, employee.age];
  const result = await pool.query(query, values);
  return result.rows[0] as Employee;
};

export const deleteEmployeeModel = async (id: number): Promise<Employee> => {
  const query = "DELETE FROM public.employees WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0] as Employee;
};
