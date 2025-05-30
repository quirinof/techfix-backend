import { Request, Response } from "express";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";
import { Prisma } from "@prisma/client";
import { makeUpdateServiceOrderItemService } from "../../services/factories/service-order-item/make-update-service-order-item";
import { serviceOrderItemSchema } from "../../schemas/service-order-item-schema";

export async function update(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);

  const parseResult = serviceOrderItemSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json({ errors: formattedErrors });
    return;
  }

  const updateServiceOrderItemService = makeUpdateServiceOrderItemService();

  try {
    const { serviceOrderItem } = await updateServiceOrderItemService.handle({
      id,
      ...parseResult.data,
    });
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
