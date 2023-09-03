import { Pool } from "pg";
import express, { NextFunction, Request, Response, response } from "express";
import { getUsers, addEmployee } from "./queries";
import { Employee } from "./types";

const app = express();

app.use(express.json());

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi");
});

app.get("/employee", (req: Request, res: Response, next: NextFunction) => {
  getUsers(res).catch(next);
});

app.post("/employee", async (req: Request, res: Response, next: NextFunction) => {
  const employeeData: Employee = req.body;
  
  console.log(req.body)

  if(!employeeData.name || !employeeData.age || !employeeData.position){
    return res.status(400).send('Bad Requet');
  }
  
  const newEmployee = await addEmployee(employeeData);
  res.status(201).json(newEmployee);
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
