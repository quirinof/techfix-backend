import express from "express";
import "dotenv/config";
import { customerRoutes } from "./routes/customer";

const app = express();

app.use(express.json());

app.use("/", customerRoutes);

export { app };
