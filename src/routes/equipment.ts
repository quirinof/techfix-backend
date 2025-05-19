import { Router } from "express";
import { create } from "../controllers/equipment/create";
import { findMany } from "../controllers/equipment/find-many";
import { findById } from "../controllers/equipment/find-by-id";

const equipmentRoutes = Router({ mergeParams: true });

equipmentRoutes.post("/", create);
equipmentRoutes.get("/", findMany);
equipmentRoutes.get("/:equipmentId", findById);

export { equipmentRoutes };
