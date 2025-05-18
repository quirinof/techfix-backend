// find many controller
import { Request, Response } from "express";
import { makeFindManyAddressesService } from "../../services/factories/address/make-find-many-addresses";

export async function findMany(req: Request, res: Response) {
  const getAddressesService = makeFindManyAddressesService();

  const customerId = parseInt(req.params.customerId as string);

  const { addresses } = await getAddressesService.handle({
    customerId,
  });

  res.status(200).json({
    data: addresses,
  });
}
