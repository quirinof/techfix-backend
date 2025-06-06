import { Request, Response } from "express";
import { deleteById } from "../../controllers/bill/delete";
import { makeDeleteBillService } from "../../services/factories/bill/make-delete-bill";

jest.mock("./../../services/factories/bill/make-delete-bill");

describe("delete bill controller", () => {
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

    (makeDeleteBillService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalled();
  });

  it("should return 200 if deletion is successful", async () => {
    const req = mockRequest({ id: "1" }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue(undefined);

    (makeDeleteBillService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await deleteById(req, res);

    expect(mockHandle).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });
});
