import { Router } from "express";
import { create } from "../controllers/user/create";
import { login } from "../controllers/user/login";

const userRoutes = Router();

const root = "/user";

userRoutes.post(`${root}`, create);
userRoutes.post(`${root}/login`, login);

export { userRoutes };
