import { PrismaUserRepository } from "../../../repositories/prisma/prisma-user-repository";
import { FindUserByEmailService } from "../../user/find-user-by-email";

export function makeFindUserByEmailService() {
  const userRepository = new PrismaUserRepository();
  const service = new FindUserByEmailService(userRepository);

  return service;
}
