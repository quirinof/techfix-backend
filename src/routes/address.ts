import { Router } from "express";
import { create } from "../controllers/address/create";

const addressRoutes = Router({ mergeParams: true });

addressRoutes.post("/", create);

export { addressRoutes };
