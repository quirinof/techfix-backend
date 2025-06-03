import { Request, Response } from "express";
import { create } from "../../controllers/bill/create";
import { makeCreateBillService } from "../../services/factories/bill/make-create-bill";

jest.mock("./../../services/factories/bill/make-create-bill");

describe("create bill controller", () => {
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

  it("should return 201 and created bill if valid", async () => {
    const billData = {
      dueDate: new Date("2025-01-01"),
      amount: 100.5,
      paymentMethod: "pix",
      serviceOrderId: 1,
    };
    const req = mockRequest(billData) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue({ bill: billData });

    (makeCreateBillService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await create(req, res);

    expect(mockHandle).toHaveBeenCalledWith(billData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ bill: billData });
  });
});
