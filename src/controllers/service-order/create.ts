import { Request, Response } from "express";
import { makeCreateServiceOrderService } from "../../services/factories/service-order/make-create-service-order";

export async function create(req: Request, res: Response) {
  const { description, estimate, customer } = req.body;

  const createServiceOrderService = makeCreateServiceOrderService();
  const { serviceOrder } = await createServiceOrderService.handle({
    description,
    estimate,
    customer,
  });
  res.status(201).json({ serviceOrder });
}
