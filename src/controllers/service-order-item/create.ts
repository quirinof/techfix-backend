import { Request, Response } from "express";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";
import { makeCreateServiceOrderItemService } from "../../services/factories/service-order-item/make-create-service-order-item";
import { serviceOrderItemSchema } from "../../schemas/service-order-item-schema";

export async function create(req: Request, res: Response) {
  const parseResult = serviceOrderItemSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json(formattedErrors);
    return;
  }

  const createServiceOrderService = makeCreateServiceOrderItemService();

  const { serviceOrderItem } = await createServiceOrderService.handle(
    parseResult.data
  );
  res.status(201).json({ serviceOrderItem });
}
