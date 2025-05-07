import { Router } from "express";
import { create } from "../controllers/customer/create";

const customerRoutes = Router();

customerRoutes.post("/customers", create);

export { customerRoutes };
