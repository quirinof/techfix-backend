import { Request, Response } from "express";
import { makeUpdateServiceOrderService } from "../../services/factories/service-order/make-update-service-order";
import { updateServiceOrderSchema } from "../../schemas/service-order-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";
import { Prisma } from "@prisma/client";

export async function update(req: Request, res: Response) {
  const id = parseInt(req.params.id as string);

  const parseResult = updateServiceOrderSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json({ errors: formattedErrors });
    return;
  }

  const updateServiceOrderService = makeUpdateServiceOrderService();

  try {
    const { serviceOrder } = await updateServiceOrderService.handle({
      id,
      ...parseResult.data,
    });

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
