import { Request, Response } from "express";
import { makeUpdateCustomerService } from "../../services/factories/customer/make-update-customer";

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const updateCustomerService = makeUpdateCustomerService();

  const { customer } = await updateCustomerService.handle({
    id: Number(id),
    name,
    email,
    phone,
  });

  res.status(200).json({ customer });
}