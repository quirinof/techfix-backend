import { Request, Response } from "express";
import { makeFindEquipmentByIdService } from "../../services/factories/equipment/make-find-equipment-by-id";

export async function findById(req: Request, res: Response) {
  const findEquipmentByIdService = makeFindEquipmentByIdService();

  const equipmentId = parseInt(req.params.equipmentId as string);
  const customerId = parseInt(req.params.customerId as string);

  const { equipment } = await findEquipmentByIdService.findById(
    equipmentId,
    customerId
  );

  if (!equipment) {
    res.status(404).json({ error: "Equipment not found for this customer" });
  }

  res.status(200).json({
    data: equipment,
  });
}
