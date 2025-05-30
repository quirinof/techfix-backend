import { Request, Response } from "express";
import { makeCreateBillService } from "../../services/factories/bill/make-create-bill";
import { billSchema } from "../../schemas/bill-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function create(req: Request, res: Response) {
  const parseResult = billSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors = zodErrorFormatter(parseResult.error);
    res.status(400).json(formattedErrors);
    return;
  }

  const data = parseResult.data;
  const dueDate =
    typeof data.dueDate === "string" ? new Date(data.dueDate) : data.dueDate;

  const createBillService = makeCreateBillService();

  const { bill } = await createBillService.handle({ ...data, dueDate });

  res.status(201).json({ bill });
}
