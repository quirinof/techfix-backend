import { Request, Response } from "express";
import { makeFindManyBillsService } from "../../services/factories/bill/make-find-many-bills";

interface Paginated {
  page: number;
  perPage: number;
  total: number;
  hasMore: boolean;
}

export async function findMany(req: Request, res: Response) {
  const findManyBillsService = makeFindManyBillsService();

  const page = parseInt(req.query.page as string) || 1;
  const perPage = parseInt(req.query.perPage as string) || 10;
  const serviceOrderId = parseInt(req.query.serviceOrderId as string);

  const { bills, total } = await findManyBillsService.handle({
    page,
    perPage,
    serviceOrderId,
  });

  const hasMore = page * perPage < total;

  const meta: Paginated = {
    page,
    perPage,
    total,
    hasMore,
  };

  res.status(200).json({ data: bills, meta });
}
