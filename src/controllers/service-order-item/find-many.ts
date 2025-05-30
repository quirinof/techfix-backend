import { Request, Response } from "express";
import { makeFindManyServiceOrderItemsService } from "../../services/factories/service-order-item/make-find-many-service-order-items";

interface Paginated {
  page: number;
  perPage: number;
  total: number;
  hasMore: boolean;
}

export async function findMany(req: Request, res: Response) {
  const getServiceOrderItemsService = makeFindManyServiceOrderItemsService();

  const page = parseInt(req.query.page as string) || 1;
  const perPage = parseInt(req.query.perPage as string) || 10;

  const { serviceOrderItens, total } = await getServiceOrderItemsService.handle(
    {
      page,
      perPage,
    }
  );

  const hasMore = page * perPage < total;

  const meta: Paginated = {
    page,
    perPage,
    total,
    hasMore,
  };

  res.status(200).json({
    data: serviceOrderItens,
    meta,
  });
}
