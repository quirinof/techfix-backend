import { Request, Response } from "express";
import { makeCreateEquipmentService } from "../../services/factories/equipment/make-create-equipment";
import { equipmentSchema } from "../../schemas/equipment-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function create(req: Request, res: Response) {
  const { customerId } = req.params;
  const id = Number(customerId);

  const parseResult = equipmentSchema.safeParse({
    ...req.body,
    customerId: id,
  });

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json({ errors: formattedErrors });
    return;
  }

  const createEquipmentService = makeCreateEquipmentService();

  const { equipment } = await createEquipmentService.handle(parseResult.data);

  res.status(201).json({ equipment });
}
