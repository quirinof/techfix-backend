import { Request, Response } from "express";
import { makeUpdateBillService } from "../../services/factories/bill/make-update-bill";
import { updateBillSchema } from "../../schemas/bill-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function update(req: Request, res: Response) {
  const { id } = req.params;

  const parseResult = updateBillSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json(formattedErrors);
    return;
  }

  const data = parseResult.data;
  const dueDate =
    typeof data.dueDate === "string" ? new Date(data.dueDate) : data.dueDate;

  const updateBillService = makeUpdateBillService();

  const { bill } = await updateBillService.handle({
    id: Number(id),
    ...data,
    dueDate,
  });

  res.status(200).json({ bill });
}
