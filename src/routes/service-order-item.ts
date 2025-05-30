import { Router } from "express";
import { create } from "../controllers/service-order-item/create";
import { findMany } from "../controllers/service-order-item/find-many";
import { findById } from "../controllers/service-order-item/find-by-id";
import { update } from "../controllers/service-order-item/update";
import { deleteById } from "../controllers/service-order-item/delete";

const serviceOrderItemRoutes = Router();

serviceOrderItemRoutes.post("/", create);
serviceOrderItemRoutes.get("/", findMany);
serviceOrderItemRoutes.get("/:id", findById);
serviceOrderItemRoutes.put("/:id", update);
serviceOrderItemRoutes.delete("/:id", deleteById);

export { serviceOrderItemRoutes };
