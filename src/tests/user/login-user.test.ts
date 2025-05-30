import { login } from "../../controllers/user/login";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { makeFindUserByEmailService } from "../../services/factories/user/make-find-user-by-email";

jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../../services/factories/user/make-find-user-by-email");

describe("login controller", () => {
  const mockRequest = (body: any): Partial<Request> => ({ body });

  const mockResponse = (): Partial<Response> => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  const userMock = {
    name: "John Doe",
    email: "johnDoe@example.com",
    password: "hashed-password",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 401 if wrong password", async () => {
    const req = mockRequest({
      email: "johnDoe@example.com",
      password: "wrong-password",
    }) as Request;

    const res = mockResponse() as Response;

    (makeFindUserByEmailService as jest.Mock).mockReturnValue({
      handle: jest.fn().mockResolvedValue({ user: userMock }),
    });

    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    await login(req, res);

    expect(bcrypt.compare).toHaveBeenCalledWith(
      "wrong-password",
      userMock.password
    );
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalled();
  });

  it("should return 200 if password is correct", async () => {
    const req = mockRequest({
      email: "johnDoe@example.com",
      password: "12345678",
    }) as Request;

    const res = mockResponse() as Response;

    (makeFindUserByEmailService as jest.Mock).mockReturnValue({
      handle: jest.fn().mockResolvedValue({ user: userMock }),
    });

    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    (jwt.sign as jest.Mock).mockReturnValue("fake-jwt-token");

    await login(req, res);

    expect(jwt.sign).toHaveBeenCalledWith(
      {
        data: {
          name: userMock.name,
          email: userMock.email,
        },
      },
      expect.any(String),
      { expiresIn: "24h" }
    );

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ accessToken: "fake-jwt-token" });
  });

  it("should return 404", async () => {
    const req = mockRequest({ email: "any", password: "any" }) as Request;
    const res = mockResponse() as Response;

    (makeFindUserByEmailService as jest.Mock).mockImplementation(() => {
      throw new Error("erro ao buscar usuário");
    });

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalled();
  });
});
