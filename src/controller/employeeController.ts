import { NextFunction, Request, Response } from "express";
import { Employee } from "../types";
import { addEmployeeModel, getAllUsersModel } from "../models/employeeModels";

export const addEmployeeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeData: Employee = req.body;

  console.log(req.body);

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
