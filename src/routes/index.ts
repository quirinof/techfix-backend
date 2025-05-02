import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("TechFix");
});

export default router;
