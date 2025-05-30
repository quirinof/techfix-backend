import { Request, Response } from "express";
import { makeDeleteServiceOrderItemByIdService } from "../../services/factories/service-order-item/make-delete-service-order-item";
import { deleteById } from "../../controllers/service-order-item/delete";

jest.mock(
  "./../../services/factories/service-order-item/make-delete-service-order-item"
);

describe("delete service order item controller", () => {
  const mockRequest = (params: any): Partial<Request> => ({ params });

  const mockResponse = (): Partial<Response> => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  it("should return 400 if deletion fails", async () => {
    const req = mockRequest({ id: "invalid" }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockRejectedValue(new Error("Invalid ID"));

    (makeDeleteServiceOrderItemByIdService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalled();
  });

  it("should return 200 if deletion is successful", async () => {
    const req = mockRequest({ id: 1 }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue(undefined);

    (makeDeleteServiceOrderItemByIdService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await deleteById(req, res);

    expect(mockHandle).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });
});
