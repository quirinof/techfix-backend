import { Router } from "express";
import { create } from "../controllers/user/create";
import { login } from "../controllers/user/login";

const userRoutes = Router();

userRoutes.post("/", create);
userRoutes.post("/login", login);

export { userRoutes };
