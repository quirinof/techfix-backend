import { Request, Response } from "express";
import { update } from "../../controllers/address/update";
import { makeUpdateAddressService } from "../../services/factories/address/make-update-address";

jest.mock("./../../services/factories/address/make-update-address");

describe("update address controller", () => {
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
      { addressId: "1" }
    ) as Request;
    const res = mockResponse() as Response;

    await update(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 200 and updated address if valid", async () => {
    const addressData = {
      street: "Rua Padre Sebastião",
      number: "40",
      complement: "Casa",
      neighborhood: "Centro",
      city: "Caicó",
      state: "RN",
      zipCode: "59300000",
    };
    const req = mockRequest({ ...addressData }, { addressId: "1" }) as Request;
    const res = mockResponse() as Response;

    const expectedServicePayload = { id: 1, ...addressData };
    const updatedAddress = { ...expectedServicePayload };

    const mockHandle = jest.fn().mockResolvedValue({ address: updatedAddress });
    (makeUpdateAddressService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await update(req, res);

    expect(mockHandle).toHaveBeenCalledWith(expectedServicePayload);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ address: updatedAddress });
  });
});
