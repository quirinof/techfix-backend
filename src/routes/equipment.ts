import { Router } from "express";
import { create } from "../controllers/equipment/create";

const equipmentRoutes = Router({ mergeParams: true });

equipmentRoutes.post("/", create);

export { equipmentRoutes };
