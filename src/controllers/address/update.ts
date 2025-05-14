import e, { Request, Response } from "express";
import { makeUpdateAddressService } from "../../services/factories/address/make-update-address";

export async function update(req: Request, res: Response) {
  const updateAddressService = makeUpdateAddressService();
  const addressId = parseInt(req.params.addressId as string);
  const { street, number, complement, neighborhood, city, state, zipCode } =
    req.body;

  const { address } = await updateAddressService.handle({
    id: addressId,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
  });

  res.status(200).json({ address });
}
