import { NextFunction, Request, Response } from "express";
import { Employee } from "../types";
import {
  addEmployeeModel,
  deleteEmployeeModel,
  getAllUsersModel,
  getEmployeeByIdModel,
  updateEmployeeByIdModel,
} from "../models/employeeModels";

export const addEmployeeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeData: Employee = req.body;

  if (!employeeData.name || !employeeData.age || !employeeData.position) {
    return res.status(400).send("Bad Requet");
  }

  const newEmployee: Employee = await addEmployeeModel(employeeData);
  res.status(201).json(newEmployee);
};

export const getAllEmployeeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result: Employee[] = (await getAllUsersModel(res).catch(
    next
  )) as Employee[];
  res.json(result);
};

export const getEmployeeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = parseInt(req.params.id)
  const result: Employee = (await getEmployeeByIdModel(id).catch(
    next
  )) as Employee;
  res.json(result);
};

export const deleteEmployeeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = parseInt(req.params.id)
  const result: Employee = (await deleteEmployeeModel(id).catch(
    next
  )) as Employee;
  res.json(result);
};

export const updateEmployeeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeData: Employee = req.body;

  if (!employeeData.id || !employeeData.name || !employeeData.age || !employeeData.position) {
    return res.status(400).send("Bad Requet");
  }
  
  const result: Employee = (await updateEmployeeByIdModel(employeeData).catch(
    next
  )) as Employee;

  res.json(result);
};