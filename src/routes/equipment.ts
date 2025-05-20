import { Router } from "express";
import { create } from "../controllers/equipment/create";
import { findMany } from "../controllers/equipment/find-many";
import { findById } from "../controllers/equipment/find-by-id";
import { update } from "../controllers/equipment/update";
import { deleteById } from "../controllers/equipment/delete";

const equipmentRoutes = Router({ mergeParams: true });

equipmentRoutes.post("/", create);
equipmentRoutes.get("/", findMany);
equipmentRoutes.get("/:equipmentId", findById);
equipmentRoutes.put("/:equipmentId", update);
equipmentRoutes.delete("/:equipmentId", deleteById);

export { equipmentRoutes };
