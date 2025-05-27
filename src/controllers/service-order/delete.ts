import { Request, Response } from "express";
import { makeDeleteServiceOrderByIdService } from "../../services/factories/service-order/make-delete-service-order";

export async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const deleteServiceOrderService = makeDeleteServiceOrderByIdService();

    await deleteServiceOrderService.handle(Number(id));

    res.status(204).send();
  } catch (err) {
    res.status(400).send();
  }
}
