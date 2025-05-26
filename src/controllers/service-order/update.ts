import { Request, Response } from "express";
import { makeUpdateServiceOrder } from "../../services/factories/service-order/make-update-service-order";

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, estimate, status } = req.body;

  const updateServiceOrder = makeUpdateServiceOrder();

  const { serviceOrder } = await updateServiceOrder.handle({
    id: Number(id),
    description,
    estimate,
    status,
  });

  res.status(200).json({ serviceOrder });
};
