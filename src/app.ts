import express, { NextFunction, Request, Response, Express } from "express";
import employeeRouter from "./router/employeeRoutes";

const app: Express = express() as Express;

app.use(express.json());

app.use("/api", employeeRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
