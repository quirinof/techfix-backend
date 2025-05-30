import { Request, Response } from "express";
import { makeDeleteServiceOrderItemByIdService } from "../../services/factories/service-order-item/make-delete-service-order-item";

export async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const deleteServiceOrderItemService =
      makeDeleteServiceOrderItemByIdService();

    await deleteServiceOrderItemService.handle(Number(id));

    res.status(204).send();
  } catch (err) {
    res.status(400).send();
  }
}
