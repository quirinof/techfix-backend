import { Router } from "express";
import { create } from "../controllers/customer/create";
import { findById } from "../controllers/customer/find-by-id";
import { findMany } from "../controllers/customer/find-many";
import { findCustomerByName } from "../controllers/customer/find-by-name";
import { deleteById } from "../controllers/customer/delete-by-id";
import { update } from "../controllers/customer/update";

const customerRoutes = Router();

const root = "/customers";

customerRoutes.post(`${root}`, create);
customerRoutes.get(`${root}`, findMany);
customerRoutes.get(`${root}/search`, findCustomerByName);
customerRoutes.get(`${root}/:id`, findById);
customerRoutes.put(`${root}/:id`, update);
customerRoutes.delete(`${root}/:id`, deleteById);

export { customerRoutes };
