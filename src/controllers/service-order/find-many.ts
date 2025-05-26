import { Request, Response } from "express";
import { makeFindManyServiceOrdersService } from "../../services/factories/service-order/make-find-many-service-orders";

interface Paginated {
  page: number;
  perPage: number;
  total: number;
  hasMore: boolean;
}

export async function findMany(req: Request, res: Response) {
  const getServiceOrdersService = makeFindManyServiceOrdersService();

  const page = parseInt(req.query.page as string) || 1;
  const perPage = parseInt(req.query.perPage as string) || 10;

  const { serviceOrders, total } = await getServiceOrdersService.handle({
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

  res.status(200).json({
    data: serviceOrders,
    meta,
  });
}
