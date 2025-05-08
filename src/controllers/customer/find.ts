import { Request, Response } from "express";
import { makeFindCustomerService } from "../../services/factories/customer/make-find-customer";

const find = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const findCustomerService = makeFindCustomerService();

    const { customer } = await findCustomerService.handle(Number(id));

    res.status(201).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export { find };
