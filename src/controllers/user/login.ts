import { Request, Response } from "express";
import { makeFindUserByEmailService } from "../../services/factories/user/make-find-user-by-email";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const findUserByEmailService = makeFindUserByEmailService();

    const { user } = await findUserByEmailService.handle(email);

    const result = await bcrypt
      .compare(password, user.password)
      .then(function (result) {
        return result;
      });

    if (!result) {
      res.status(401).send();
    }

    const accessToken = jwt.sign(
      {
        data: {
          name: user.name,
          email: user.email,
        },
      },
      String(process.env.JWT_SECRET),
      { expiresIn: "24h" }
    );

    res.status(200).json({
      accessToken,
    });
  } catch (err) {
    res.status(404).send();
  }
}
