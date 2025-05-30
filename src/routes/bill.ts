import { Router } from "express";
import { create } from "../controllers/bill/create";

const billRoutes = Router();

billRoutes.post("/", create);

export { billRoutes };
