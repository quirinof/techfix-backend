import { Request, Response } from "express";
import { makeUpdateEquipmentService } from "../../services/factories/equipment/make-update-equipment";
import { updateEquipmentSchema } from "../../schemas/equipment-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function update(req: Request, res: Response) {
  const equipmentId = parseInt(req.params.equipmentId as string);

  const parseResult = updateEquipmentSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json({ errors: formattedErrors });
    return;
  }

  const updateEquipmentService = makeUpdateEquipmentService();

  const { equipment } = await updateEquipmentService.handle({
    id: equipmentId,
    ...parseResult.data,
  });

  res.status(200).json({ equipment });
}
