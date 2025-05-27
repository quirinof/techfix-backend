import { Request, Response } from "express";
import { makeCreateServiceOrderService } from "../../services/factories/service-order/make-create-service-order";
import { serviceOrderSchema } from "../../schemas/service-order-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function create(req: Request, res: Response) {
  const parseResult = serviceOrderSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json(formattedErrors);
    return;
  }

  const createServiceOrderService = makeCreateServiceOrderService();

  const { serviceOrder } = await createServiceOrderService.handle(
    parseResult.data
  );
  res.status(201).json({ serviceOrder });
}
