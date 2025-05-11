import { Request, Response } from "express";
import { makeCreateCustomerService } from "../../services/factories/customer/make-create-customer";

export async function create(req: Request, res: Response) {
  const { name, document, documentType, email, phone } = req.body;
  const createCustomerService = makeCreateCustomerService();

  const { customer } = await createCustomerService.handle({
    name,
    document,
    documentType,
    email,
    phone,
  });
  res.status(201).json({ customer });
}