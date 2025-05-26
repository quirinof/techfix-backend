import { Router } from "express";
import { create } from "../controllers/service-order/create";
import { findMany } from "../controllers/service-order/find-many";
import { findById } from "../controllers/service-order/find-by-id";

const serviceOrderRoutes = Router();

serviceOrderRoutes.post("/", create);
serviceOrderRoutes.get("/", findMany);
serviceOrderRoutes.get("/:id", findById);

export { serviceOrderRoutes };
