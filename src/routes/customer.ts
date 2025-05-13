import { Router } from "express";
import { create } from "../controllers/customer/create";
import { findById } from "../controllers/customer/find-by-id";
import { findMany } from "../controllers/customer/find-many";
import { findCustomerByName } from "../controllers/customer/find-by-name";
import { deleteById } from "../controllers/customer/delete-by-id";
import { update } from "../controllers/customer/update";
import { addressRoutes } from "./address";

const customerRoutes = Router();

customerRoutes.post("/", create);
customerRoutes.get("/", findMany);
customerRoutes.get("/search", findCustomerByName);
customerRoutes.get("/:id", findById);
customerRoutes.put("/:id", update);
customerRoutes.delete("/:id", deleteById);

customerRoutes.use("/:customerId/addresses", addressRoutes);

export { customerRoutes };
