import { Request, Response } from "express";
import { deleteById } from "../../controllers/equipment/delete";
import { makeDeleteEquipmentService } from "../../services/factories/equipment/make-delete-equipment";

jest.mock("./../../services/factories/equipment/make-delete-equipment");

describe("delete equipment controller", () => {
  const mockRequest = (params: any): Partial<Request> => ({ params });

  const mockResponse = (): Partial<Response> => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should return 400 if deletion fails", async () => {
    const req = mockRequest({ equipmentId: "invalid" }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockRejectedValue(new Error("Invalid ID"));

    (makeDeleteEquipmentService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await deleteById(req, res);

    expect(mockHandle).toHaveBeenCalledWith(NaN);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalled();
  });

  it("should return 200 if deletion is successful", async () => {
    const req = mockRequest({ equipmentId: "1" }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue(undefined);

    (makeDeleteEquipmentService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await deleteById(req, res);

    expect(mockHandle).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });
});
