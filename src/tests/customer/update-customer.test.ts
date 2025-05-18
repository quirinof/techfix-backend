import e, { Request, Response } from "express";
import { update } from "../../controllers/customer/update";
import { makeUpdateCustomerService } from "../../services/factories/customer/make-update-customer";

jest.mock("./../../services/factories/customer/make-update-customer");

describe("update customer controller", () => {
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
    const req = mockRequest(
      {
        name: "A",
        phone: "123",
        email: "invalid-email",
        document: "123",
      },
      { id: "1" }
    ) as Request;
    const res = mockResponse() as Response;

    await update(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Validation failed",
      errors: expect.arrayContaining([
        { field: "name", message: "Name must be at least 2 characters long" },
        {
          field: "phone",
          message: "Phone must be at least 11 characters long",
        },
        { field: "email", message: "Invalid email format" },
        {
          field: "document",
          message: "Document must be at least 9 characters long",
        },
      ]),
    });
  });

  it("should return 200 and updated customer if valid", async () => {
    const customerData = {
      name: "Matheus",
      phone: "12345678901",
      email: "matheus@example.com",
      document: "123456789",
    };
    const req = mockRequest(customerData, { id: "1" }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue({ customer: customerData });

    (makeUpdateCustomerService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await update(req, res);

    expect(mockHandle).toHaveBeenCalledWith({ id: 1, ...customerData });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ customer: customerData });
  });
});
