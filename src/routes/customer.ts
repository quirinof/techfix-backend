import { Router } from "express";
import { create } from "../controllers/customer/create";
import { findById } from "../controllers/customer/find-by-id";

const customerRoutes = Router();

const root = "/customers";

customerRoutes.post(`${root}`, create);
customerRoutes.get(`${root}/:id`, findById);

export { customerRoutes };
