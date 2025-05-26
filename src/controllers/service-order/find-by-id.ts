import { Request, Response } from "express";
import { makeFindServiceOrderById } from "../../services/factories/service-order/make-find-service-order-by-id";

export async function findById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const findServiceOrderByIdService = makeFindServiceOrderById();

    const { serviceOrder } = await findServiceOrderByIdService.handle(
      Number(id)
    );
    res.status(200).json({ serviceOrder });
  } catch (err) {
    res.status(404).send();
  }
}
