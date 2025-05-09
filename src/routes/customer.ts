import { Router } from "express";
import { create } from "../controllers/customer/create";
import { findById } from "../controllers/customer/find-by-id";
import { findMany } from "../controllers/customer/find-many";

const customerRoutes = Router();

const root = "/customers";

customerRoutes.post(`${root}`, create);
customerRoutes.get(`${root}/:id`, findById);
customerRoutes.get(`${root}`, findMany);

export { customerRoutes };
