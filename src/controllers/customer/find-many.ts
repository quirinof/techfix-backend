import { Request, Response } from "express";
import { makeFindManyCustomersService } from "../../services/factories/customer/make-find-many-customers";

interface Paginated {
  page: number;
  perPage: number;
  total: number;
  hasMore: boolean;
}

export async function findMany(req: Request, res: Response) {
  const getCustomersService = makeFindManyCustomersService();

  const page = parseInt(req.query.page as string) || 1;
  const perPage = parseInt(req.query.perPage as string) || 10;

  const { customers, total } = await getCustomersService.handle({
    page,
    perPage,
  });

  const hasMore = page * perPage < total;

  const meta: Paginated = {
    page,
    perPage,
    total,
    hasMore,
  };

  return res.status(200).json({
    data: customers,
    meta,
  });
}
