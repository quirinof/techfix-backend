import { Request, Response } from "express";
import { update } from "../../controllers/bill/update";
import { makeUpdateBillService } from "../../services/factories/bill/make-update-bill";

jest.mock("./../../services/factories/bill/make-update-bill");

describe("update bill controller", () => {
  const mockRequest = (body: any, params: any = {}): Partial<Request> => ({
    body,
    params,
  });

  const mockResponse = () => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should return 400 if validation fails", async () => {
    const req = mockRequest(
      { dueDate: "25-12-2025", amount: "invalid" },
      { id: "1" }
    ) as Request;
    const res = mockResponse() as Response;

    await update(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 200 and updated bill if valid", async () => {
    const billData = {
      dueDate: new Date("2025-01-01"),
      paymentMethod: "pix",
      serviceOrderId: 1,
    };
    const req = mockRequest(billData, { id: "1" }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue({ bill: billData });

    (makeUpdateBillService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await update(req, res);

    expect(mockHandle).toHaveBeenCalledWith({ id: 1, ...billData });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ bill: billData });
  });
});
