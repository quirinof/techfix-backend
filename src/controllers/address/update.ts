import e, { Request, Response } from "express";
import { makeUpdateAddressService } from "../../services/factories/address/make-update-address";
import { updateAddressSchema } from "../../schemas/address-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function update(req: Request, res: Response) {
  const updateAddressService = makeUpdateAddressService();
  const addressId = parseInt(req.params.addressId as string);

  const parseResult = updateAddressSchema.safeParse(req.body);
  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    return res.status(400).json({ errors: formattedErrors });
  }

  const { address } = await updateAddressService.handle({
    id: addressId,
    ...parseResult.data,
  });

  res.status(200).json({ address });
}
