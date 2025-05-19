import { Router } from "express";
import { create } from "../controllers/equipment/create";
import { findMany } from "../controllers/equipment/find-many";

const equipmentRoutes = Router({ mergeParams: true });

equipmentRoutes.post("/", create);
equipmentRoutes.get("/", findMany);

export { equipmentRoutes };
