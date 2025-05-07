import express from "express";
import { customerRoutes } from "./routes/customer";

const app = express();

app.use(express.json()); // Não esquece isso para habilitar req.body!

app.use("/", customerRoutes);

export { app };
