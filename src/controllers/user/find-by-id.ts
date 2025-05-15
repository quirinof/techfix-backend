import { Request, Response } from "express";
import { makeFindUserByIdService } from "../../services/factories/user/make-find-user-by-id";

export async function findById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const findUserByIdService = makeFindUserByIdService();

    const { user } = await findUserByIdService.handle(Number(id));

    res.status(200).json({ user });
  } catch (err) {
    res.status(404).send();
  }
}
