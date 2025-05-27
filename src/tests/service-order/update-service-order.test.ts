import { Request, Response } from "express";
import { update } from "../../controllers/service-order/update";
import { makeUpdateServiceOrderService } from "../../services/factories/service-order/make-update-service-order";

jest.mock("./../../services/factories/service-order/make-update-service-order");

describe("update service order controller", () => {
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
      description: "A",
      estimate: 0,
      customerId: 1,
    }) as Request;
    const res = mockResponse() as Response;

    await update(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 200 and updated service order if valid", async () => {
    const serviceOrderData = {
      description: "Updated service order",
      estimate: 100,
      customerId: 1,
    };
    const req = mockRequest(serviceOrderData, { id: 1 }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest
      .fn()
      .mockResolvedValue({ serviceOrder: serviceOrderData });

    (makeUpdateServiceOrderService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await update(req, res);

    expect(mockHandle).toHaveBeenCalledWith({ id: 1, ...serviceOrderData });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ serviceOrder: serviceOrderData });
  });
});
