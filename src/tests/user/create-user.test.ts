import { Request, Response } from "express";
import { create } from "../../controllers/user/create";
import { makeCreateUserService } from "../../services/factories/user/make-create-user";

jest.mock("./../../services/factories/user/make-create-user");

describe("create user controller", () => {
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
    const req = mockRequest({
      name: "",
      email: "invalid-email",
      password: "123",
    }) as Request;
    const res = mockResponse() as Response;

    await create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should return 201 and created user if valid", async () => {
    const userData = {
      name: "JohnDOe",
      email: "JohnDoe@example.com",
      password: "12345678",
    };

    const req = mockRequest(userData, {
      customerId: 1,
    }) as Request;
    const res = mockResponse() as Response;

    const mockHandle = jest.fn().mockResolvedValue({ user: userData });

    (makeCreateUserService as jest.Mock).mockReturnValue({
      handle: mockHandle,
    });

    await create(req, res);

    expect(mockHandle).toHaveBeenCalledWith(userData);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ user: userData });
  });
});
