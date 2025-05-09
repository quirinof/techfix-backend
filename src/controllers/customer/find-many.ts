import { Request, Response } from "express";
import { makeFindManyCustomersService } from "../../services/factories/customer/make-find-many-customers";

export async function findMany(req: Request, res: Response) {
  const getCustomersService = makeFindManyCustomersService();
  
  const { customer } = await getCustomersService.execute();

  res.status(200).json(customer);
}
