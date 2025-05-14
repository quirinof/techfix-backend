import { Router } from "express";
import { create } from "../controllers/address/create";
import { findMany } from "../controllers/address/find-many";
import { findById } from "../controllers/address/find-by-id";
import { update } from "../controllers/address/update";

const addressRoutes = Router({ mergeParams: true });

addressRoutes.post("/", create);
addressRoutes.get("/", findMany);
addressRoutes.get("/:addressId", findById);
addressRoutes.put("/:addressId", update);

export { addressRoutes };
