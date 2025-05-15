import { Request, Response } from "express";
import { makeDeleteAddressByIdService } from "../../services/factories/address/make-delete-address-by-id";

export async function deleteById(req: Request, res: Response) {
  try {
    const { addressId } = req.params;
    const id = Number(addressId);

    const deleteAddressService = makeDeleteAddressByIdService();

    await deleteAddressService.handle(id);

    res.status(204).send();
  } catch (err) {
    res.status(400).send();
  }
}
