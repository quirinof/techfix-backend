import { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { makeFindServiceOrderItemById } from "../../services/factories/service-order-item/make-find-service-order-item-by-id";

export async function findById(req: Request, res: Response) {
  const { id } = req.params;

  const findServiceOrderItemByIdService = makeFindServiceOrderItemById();

  try {
    const { serviceOrderItem } = await findServiceOrderItemByIdService.handle(
      Number(id)
    );
    res.status(200).json({ serviceOrderItem });
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
