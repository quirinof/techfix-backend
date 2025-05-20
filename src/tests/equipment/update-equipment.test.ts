import { Request, Response } from "express";
import { update } from "../../controllers/equipment/update";
import { makeUpdateEquipmentService } from "../../services/factories/equipment/make-update-equipment";

jest.mock("./../../services/factories/equipment/make-update-equipment");

describe("update equipment controller", () => {
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
      { equipmentId: "1" }
    ) as Request;
    const res = mockResponse() as Response;

    await update(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 200 and updated equipment if valid", async () => {
    const equipmentData = {
      deviceType: "notebook",
      brand: "dell",
      model: "g15",
      serialNumber: "abc123xyz789",
    };
    const req = mockRequest(
      { ...equipmentData },
      { equipmentId: "1" }
    ) as Request;
    const res = mockResponse() as Response;

    const expectedServicePayload = { id: 1, ...equipmentData };
    const updateEquipment = { ...expectedServicePayload };

    const mockHandle = jest
      .fn()
      .mockResolvedValue({ equipment: updateEquipment });
    (makeUpdateEquipmentService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await update(req, res);

    expect(mockHandle).toHaveBeenCalledWith(expectedServicePayload);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ equipment: updateEquipment });
  });
});
