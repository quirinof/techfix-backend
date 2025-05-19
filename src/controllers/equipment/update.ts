import { Request, Response } from "express";
import { makeUpdateEquipmentService } from "../../services/factories/equipment/make-update-equipment";

export async function update(req: Request, res: Response) {
  const equipmentId = parseInt(req.params.equipmentId as string);
  const { deviceType, brand, model, serialNumber } = req.body;

  const updateEquipmentService = makeUpdateEquipmentService();

  const { equipment } = await updateEquipmentService.handle({
    id: equipmentId,
    deviceType,
    brand,
    model,
    serialNumber,
  });

  res.status(200).json({ equipment });
}
