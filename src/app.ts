import express from "express";
import "dotenv/config";
import { customerRoutes } from "./routes/customer";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(customerRoutes);

export { app };
