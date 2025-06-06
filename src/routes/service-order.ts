import { Router } from "express";
import { create } from "../controllers/service-order/create";
import { findMany } from "../controllers/service-order/find-many";
import { findById } from "../controllers/service-order/find-by-id";
import { update } from "../controllers/service-order/update";
import { deleteById } from "../controllers/service-order/delete";

const serviceOrderRoutes = Router();

serviceOrderRoutes.post("/", create);
serviceOrderRoutes.get("/", findMany);
serviceOrderRoutes.get("/:id", findById);
serviceOrderRoutes.put("/:id", update);
serviceOrderRoutes.delete("/:id", deleteById);

export { serviceOrderRoutes };
