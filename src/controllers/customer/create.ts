import { Request, Response } from "express";
import { makeCreateCustomerService } from "../../services/factories/customer/make-create-customer";
import { createCustomerSchema } from "../../schemas/customer-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function create(req: Request, res: Response) {
  const parseResult = createCustomerSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    return res.status(400).json(formattedErrors);
  }

  const createCustomerService = makeCreateCustomerService();

  const { customer } = await createCustomerService.handle(parseResult.data);

  res.status(201).json({ customer });
}