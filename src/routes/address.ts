import { Router } from "express";
import { create } from "../controllers/address/create";
import { findMany } from "../controllers/address/find-many";

const addressRoutes = Router({ mergeParams: true });

addressRoutes.post("/", create);
addressRoutes.get("/", findMany);

export { addressRoutes };
