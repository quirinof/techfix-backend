import { Request, Response } from "express";
import { makeDeleteBillService } from "../../services/factories/bill/make-delete-bill";

export async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const deleteBillService = makeDeleteBillService();

    await deleteBillService.handle(Number(id));

    res.status(204).send();
  } catch (err) {
    res.status(400).send();
  }
}
