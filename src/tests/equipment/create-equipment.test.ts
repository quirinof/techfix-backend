import { Request, Response } from "express";
import { create } from "../../controllers/equipment/create";
import { makeCreateEquipmentService } from "../../services/factories/equipment/make-create-equipment";

jest.mock("./../../services/factories/equipment/make-create-equipment");

describe("create equipment controller", () => {
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
        deviceType: "invalid",
        brand: "d",
        model: "g",
        serialNumber: "123",
      },
      { customerId: 1 }
    ) as Request;
    const res = mockResponse() as Response;

    await create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 201 and created equipment if valid", async () => {
    const equipmentData = {
      customerId: 1,
      deviceType: "notebook",
      brand: "dell",
      model: "g15",
      serialNumber: "abc123xyz789",
    };
    const req = mockRequest(equipmentData, {
      customerId: 1,
    }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest
      .fn()
      .mockResolvedValue({ equipment: equipmentData });

    (makeCreateEquipmentService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await create(req, res);

    expect(mockHandle).toHaveBeenCalledWith(equipmentData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ equipment: equipmentData });
  });
});
