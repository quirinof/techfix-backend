import { Request, Response } from "express";
import { makeCreateCustomerService } from "../../services/factories/customer/make-create-customer";

const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone } = req.body;

    const createCustomerService = makeCreateCustomerService();

    const { customer } = await createCustomerService.handle({
      name,
      email,
      phone,
    });

    res.status(201).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export { create };
