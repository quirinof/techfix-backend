import { Router } from "express";
import { create } from "../controllers/customer/create";
import { find } from "../controllers/customer/find";

const customerRoutes = Router();

const root = "/customers";

customerRoutes.post(`${root}`, create);
customerRoutes.get(`${root}/:id`, find);

export { customerRoutes };
