import { Request, Response } from "express";
import { makeCreateUserService } from "../../services/factories/user/make-create-user";
import { createUserSchema } from "../../schemas/user-schema";
import { zodErrorFormatter } from "../../utils/zod-error-formatter";

export async function create(req: Request, res: Response) {
  try {
    const createUserService = makeCreateUserService();
    const parseResult = createUserSchema.safeParse({
      ...req.body,
    });

    if (!parseResult.success) {
      const formattedErrors = zodErrorFormatter(parseResult.error);
      res.status(400).json({ errors: formattedErrors });
      return;
    }

    const { user } = await createUserService.handle(req.body);

    res.status(201).json({ user });
  } catch (err) {
    res.status(400).send();
  }
}
