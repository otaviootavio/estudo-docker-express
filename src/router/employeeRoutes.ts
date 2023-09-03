import express, { Router } from "express";
import { NextFunction, Request, Response } from "express";
import {
  addEmployeeController,
  getAllEmployeeController,
} from "../controller/employeeController";

const employeeRouter: Router = express.Router() as Router;

employeeRouter.get(
  "/employee",
  (req: Request, res: Response, next: NextFunction) => {
    getAllEmployeeController(req, res, next).catch(next);
  }
);

employeeRouter.post(
  "/employee",
  (req: Request, res: Response, next: NextFunction) => {
    addEmployeeController(req, res, next).catch(next);
  }
);

export default employeeRouter;
