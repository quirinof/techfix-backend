import { Router } from "express";
import { create } from "../controllers/service-order/create";

const serviceOrderRoutes = Router();

serviceOrderRoutes.post("/", create);

export { serviceOrderRoutes };
