import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function verifyToken(req: Request, res: Response) {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      res.status(401).json({ message: "Authorization header missing" });
      return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Token not provided" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    res.status(200).json({ message: "Token valid", decoded });
  } catch (error) {
    res.status(401).json({ message: "Invalid token", error });
  }
}
