import { Router } from "express";
import { create } from "../controllers/service-order/create";
import { findMany } from "../controllers/service-order/find-many";

const serviceOrderRoutes = Router();

serviceOrderRoutes.post("/", create);
serviceOrderRoutes.get("/", findMany);

export { serviceOrderRoutes };
