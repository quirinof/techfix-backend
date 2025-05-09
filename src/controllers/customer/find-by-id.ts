import { Request, Response } from "express";
import { makeFindCustomerByIdService } from "../../services/factories/customer/make-find-customer-by-id";

export async function findById(req: Request, res: Response) {
  const { id } = req.params;

  const findCustomerByIdService = makeFindCustomerByIdService();

  const { customer } = await findCustomerByIdService.handle(Number(id));

  res.status(201).json({ customer });
};
