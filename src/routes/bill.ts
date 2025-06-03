import { Router } from "express";
import { create } from "../controllers/bill/create";
import { findMany } from "../controllers/bill/find-many";
import { findById } from "../controllers/bill/find-by-id";
import { update } from "../controllers/bill/update";
import { deleteById } from "../controllers/bill/delete";

const billRoutes = Router();

billRoutes.post("/", create);
billRoutes.get("/", findMany);
billRoutes.get("/:id", findById);
billRoutes.put("/:id", update);
billRoutes.delete("/:id", deleteById);

export { billRoutes };
