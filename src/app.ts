import express from "express";
import "dotenv/config";
import { customerRoutes } from "./routes/customer";
import cors from "cors";
import { userRoutes } from "./routes/user";
import { serviceOrderRoutes } from "./routes/service-order";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/customers", customerRoutes);
app.use("/user", userRoutes);
app.use("/service-orders", serviceOrderRoutes);

export { app };
