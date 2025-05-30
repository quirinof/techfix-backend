import { Request, Response } from "express";
import { update } from "../../controllers/service-order-item/update";
import { makeUpdateServiceOrderItemService } from "../../services/factories/service-order-item/make-update-service-order-item";

jest.mock(
  "./../../services/factories/service-order-item/make-update-service-order-item"
);

describe("update service order item controller", () => {
  const mockRequest = (body: any, params: any = {}): Partial<Request> => ({
    body,
    params,
  });

  const mockResponse = (): Partial<Response> => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should return 400 if validation fails", async () => {
    const req = mockRequest({
      description: 1,
      equipmentId: -1,
    }) as Request;
    const res = mockResponse() as Response;

    await update(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 200 and updated service order if valid", async () => {
    const serviceOrderData = {
      description: "Atualização da descrição do serviço",
      status: "executing",
      equipmentId: 1,
      serviceOrderId: 1,
    };
    const req = mockRequest(serviceOrderData, { id: 1 }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest
      .fn()
      .mockResolvedValue({ serviceOrderItem: serviceOrderData });

    (makeUpdateServiceOrderItemService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await update(req, res);

    expect(mockHandle).toHaveBeenCalledWith({ id: 1, ...serviceOrderData });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      serviceOrderItem: serviceOrderData,
    });
  });
});
