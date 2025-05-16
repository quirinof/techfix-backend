import { Request, Response } from "express";
import { create } from "../../controllers/address/create";
import { makeCreateAddressService } from "../../services/factories/address/make-create-address";

jest.mock("./../../services/factories/address/make-create-address");

describe("create address controller", () => {
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
        street: "R",
        number: "",
        neighborhood: "C",
        city: "C",
        state: "R",
      },
      { customerId: 1 }
    ) as Request;
    const res = mockResponse() as Response;

    await create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 201 and created address if valid", async () => {
    const addressData = {
      customerId: 1,
      street: "Rua Padre Sebastião",
      number: "40",
      complement: "Casa",
      neighborhood: "Centro",
      city: "Caicó",
      state: "RN",
      zipCode: "59300000",
    };
    const req = mockRequest(addressData, { customerId: 1 }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue({ address: addressData });

    (makeCreateAddressService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await create(req, res);

    expect(mockHandle).toHaveBeenCalledWith(addressData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ address: addressData });
  });
});
