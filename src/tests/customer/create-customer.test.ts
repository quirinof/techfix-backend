import { Request, Response } from "express";
import { create } from "../../controllers/customer/create";
import { makeCreateCustomerService } from "../../services/factories/customer/make-create-customer";

jest.mock("./../../services/factories/customer/make-create-customer");

describe("create customer controller", () => {
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

  it("should return 201 and created customer if valid", async () => {
    const customerData = { name: "johndoe", email: "johndoe@example.com" };
    const req = mockRequest(customerData) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue({ customer: customerData });

    (makeCreateCustomerService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await create(req, res);

    expect(mockHandle).toHaveBeenCalledWith(customerData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ customer: customerData });
  });
});
