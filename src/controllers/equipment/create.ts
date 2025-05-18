import { Request, Response } from "express";
import { makeCreateEquipmentService } from "../../services/factories/equipment/make-create-equipment";

export async function create(req: Request, res: Response) {
  const { customerId } = req.params;
  const { deviceType, brand, model, serialNumber } = req.body;

  const createEquipmentService = makeCreateEquipmentService();

  const { equipment } = await createEquipmentService.handle({
    deviceType,
    brand,
    model,
    serialNumber,
    customer: Number(customerId),
  });

  res.status(201).json({ equipment });
}
