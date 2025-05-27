import { Request, Response } from "express";
import { makeFindServiceOrderById } from "../../services/factories/service-order/make-find-service-order-by-id";
import { Prisma } from "@prisma/client";

export async function findById(req: Request, res: Response) {
  const { id } = req.params;

  const findServiceOrderByIdService = makeFindServiceOrderById();

  try {
    const { serviceOrder } = await findServiceOrderByIdService.handle(
      Number(id)
    );
    res.status(200).json({ serviceOrder });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      res.status(404).json({ error: "Service Order not found." });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
}
