import { Router } from "express";
import { create } from "../controllers/bill/create";
import { findMany } from "../controllers/bill/find-many";

const billRoutes = Router();

billRoutes.post("/", create);
billRoutes.get("/", findMany);

export { billRoutes };
