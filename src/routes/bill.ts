import { Router } from "express";
import { create } from "../controllers/bill/create";
import { findMany } from "../controllers/bill/find-many";
import { findById } from "../controllers/bill/find-by-id";

const billRoutes = Router();

billRoutes.post("/", create);
billRoutes.get("/", findMany);
billRoutes.get("/:id", findById);

export { billRoutes };
