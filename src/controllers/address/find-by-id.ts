import { Request, Response } from "express";
import { makeFindAddressByIdService } from "../../services/factories/address/make-find-address-by-id";

export async function findById(req: Request, res: Response) {
  const findAddressByIdService = makeFindAddressByIdService();

  const addressId = parseInt(req.params.addressId as string);
  const customerId = parseInt(req.params.customerId as string);

  const { address } = await findAddressByIdService.findById(
    addressId,
    customerId
  );

  if (!address) {
    return res
      .status(404)
      .json({ error: "Address not found for this customer" });
  }

  res.status(200).json({
    data: address,
  });
}
