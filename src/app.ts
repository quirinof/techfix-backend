import express from "express";
import "dotenv/config";
import { customerRoutes } from "./routes/customer";
import cors from "cors";
import { userRoutes } from "./routes/user";
import { serviceOrderRoutes } from "./routes/service-order";
import { serviceOrderItemRoutes } from "./routes/service-order-item";
import { equipmentRoutes } from "./routes/equipment";
import { billRoutes } from "./routes/bill";

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
app.use("/equipment", equipmentRoutes);
app.use("/service-orders", serviceOrderRoutes);
app.use("/service-order-item", serviceOrderItemRoutes);
app.use("/bills", billRoutes);

export { app };
