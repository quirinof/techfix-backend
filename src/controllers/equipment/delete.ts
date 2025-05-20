import { Request, Response } from "express";
import { makeDeleteEquipmentService } from "../../services/factories/equipment/make-delete-equipment";

export async function deleteById(req: Request, res: Response) {
  try {
    const equipmentId = parseInt(req.params.equipmentId as string);

    const deleteEquipmentService = makeDeleteEquipmentService();

    await deleteEquipmentService.handle(equipmentId);

    res.status(204).send();
  } catch (err) {
    res.status(400).send;
  }
}
