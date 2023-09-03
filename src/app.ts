import { Pool } from "pg";
import express, { NextFunction, Request, Response, response } from "express";
import { getUsers } from "./queries";

const app = express();

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi");
});

app.get("/users", (req: Request, res: Response, next: NextFunction) => {
  getUsers(res).catch(next);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
