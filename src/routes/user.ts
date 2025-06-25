import { Router } from "express";
import { create } from "../controllers/user/create";
import { login } from "../controllers/user/login";
import { verifyToken } from "../controllers/auth/verify-token";

const userRoutes = Router();

userRoutes.post("/", create);
userRoutes.post("/login", login);
userRoutes.post("/validate", verifyToken);

export { userRoutes };
