import express, { Router } from "express";
import { NextFunction, Request, Response } from "express";
import {
  addEmployeeController,
  deleteEmployeeByIdController,
  getAllEmployeeController,
  getEmployeeByIdController,
  updateEmployeeByIdController,
} from "../controller/employeeController";

const employeeRouter: Router = express.Router() as Router;

employeeRouter.get(
  "/employee",
  (req: Request, res: Response, next: NextFunction) => {
    getAllEmployeeController(req, res, next).catch(next);
  }
);

employeeRouter.get(
  "/employee/:id",
  (req: Request, res: Response, next: NextFunction) => {
    getEmployeeByIdController(req, res, next).catch(next);
  }
);

employeeRouter.delete(
  "/employee/:id",
  (req: Request, res: Response, next: NextFunction) => {
    deleteEmployeeByIdController(req, res, next).catch(next);
  }
);

employeeRouter.put(
  "/employee",
  (req: Request, res: Response, next: NextFunction) => {
    updateEmployeeByIdController(req, res, next).catch(next);
  }
);

employeeRouter.post(
  "/employee",
  (req: Request, res: Response, next: NextFunction) => {
    addEmployeeController(req, res, next).catch(next);
  }
);

export default employeeRouter;
