import { Request, Response } from "express";
import { makeDeleteCustomerByIdService } from "../../services/factories/customer/make-delete-customer-by-id";

export async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const deleteCustomerService = makeDeleteCustomerByIdService();

    await deleteCustomerService.handle(Number(id));

    res.status(200).send();
  } catch (err) {
    res.status(400).send();
  }
}
