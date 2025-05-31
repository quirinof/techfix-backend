import { Request, Response } from "express";
import { makeFindBillByIdService } from "../../services/factories/bill/make-find-bill-by-id";
import { Prisma } from "@prisma/client";

export async function findById(req: Request, res: Response) {
  const { id } = req.params;

  const findBillByIdService = makeFindBillByIdService();

  try {
    const { bill } = await findBillByIdService.handle(Number(id));

    res.status(200).json({ bill });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      res.status(404).json({ error: "Bill not found." });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
}
