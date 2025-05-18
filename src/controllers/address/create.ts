import { Request, Response } from "express";
import { makeCreateAddressService } from "../../services/factories/address/make-create-address";
import { addressSchema } from "../../schemas/address-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function create(req: Request, res: Response) {
  const { customerId } = req.params;
  const id = Number(customerId);

  const parseResult = addressSchema.safeParse({ ...req.body, customerId: id });

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json({ errors: formattedErrors });
    return;
  }

  const createAddressService = makeCreateAddressService();

  const { address } = await createAddressService.handle(parseResult.data);

  res.status(201).json({ address });
}
