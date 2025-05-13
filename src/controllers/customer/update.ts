import { Request, Response } from "express";
import { makeUpdateCustomerService } from "../../services/factories/customer/make-update-customer";
import { updateCustomerSchema } from "../../schemas/customer-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function update(req: Request, res: Response) {
  const { id } = req.params;

  const parseResult = updateCustomerSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json(formattedErrors);
    return;
  }

  const updateCustomerService = makeUpdateCustomerService();

  const { customer } = await updateCustomerService.handle({
    id: Number(id),
    ...parseResult.data,
  });

  res.status(200).json({ customer });
}
