import { Request, Response } from "express";
import { makeCreateUserService } from "../../services/factories/user/make-create-user";

export async function create(req: Request, res: Response) {
  try {
    const createUserService = makeCreateUserService();

    const { user } = await createUserService.handle(req.body);

    res.status(201).json({ user });
  } catch (err) {
    res.status(400).send();
  }
}
