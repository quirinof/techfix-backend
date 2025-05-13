import { Request, Response } from "express";
import { makeFindCustomerByIdService } from "../../services/factories/customer/make-find-customer-by-id";

export async function findById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const findCustomerByIdService = makeFindCustomerByIdService();

    const { customer } = await findCustomerByIdService.handle(Number(id));

    res.status(200).json({ customer });
  } catch (err) {
    res.status(404).send();
  }
}
