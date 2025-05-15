import { Request, Response } from "express";
import { makeCreateAddressService } from "../../services/factories/address/make-create-address";

export async function create(req: Request, res: Response) {
  const { customerId } = req.params;
  const { street, number, complement, neighborhood, city, state, zipCode } =
    req.body;

  const createAddressService = makeCreateAddressService();

  const { address } = await createAddressService.handle({
    customer: Number(customerId),
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
  });

  res.status(201).json(address);
}
