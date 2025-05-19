import { Request, Response } from "express";
import { makeFindManyEquipmentsService } from "../../services/factories/equipment/make-find-many-equipments";

export async function findMany(req: Request, res: Response) {
  const { customerId } = req.params;

  const getEquipmentsService = makeFindManyEquipmentsService();

  const { equipments } = await getEquipmentsService.handle({
    customerId: Number(customerId),
  });

  res.status(200).json({ data: equipments });
}
