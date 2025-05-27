import { Request, Response } from "express";
import { create } from "../../controllers/service-order/create";
import { makeCreateServiceOrderService } from "../../services/factories/service-order/make-create-service-order";

jest.mock("./../../services/factories/service-order/make-create-service-order");

describe("create service order controller", () => {
  const mockRequest = (body: any): Partial<Request> => ({ body });

  const mockResponse = (): Partial<Response> => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should return 400 if validation fails", async () => {
    const req = mockRequest({}) as Request;
    const res = mockResponse() as Response;

    await create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 201 and created service order if valid", async () => {
    const serviceOrderData = {
      description: "New service order",
      customerId: 1,
    };
    const req = mockRequest(serviceOrderData) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest
      .fn()
      .mockResolvedValue({ serviceOrder: serviceOrderData });

    (makeCreateServiceOrderService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await create(req, res);

    expect(mockHandle).toHaveBeenCalledWith(serviceOrderData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ serviceOrder: serviceOrderData });
  });
});
