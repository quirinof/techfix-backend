import { Request, Response } from "express";
import { makeFindCustomerByNameService } from "../../services/factories/customer/make-find-customer-by-name";

export async function findCustomerByName(req: Request, res: Response) {
  const findCustomerByNameService = makeFindCustomerByNameService();

  const { name } = req.query as { name: string };
    
  const { customer } = await findCustomerByNameService.execute({
    customerName: name,
  });

  res.status(200).json(customer);
}
