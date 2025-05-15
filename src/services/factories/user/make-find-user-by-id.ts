import { PrismaUserRepository } from "../../../repositories/prisma/prisma-user-repository";
import { FindUserByIdService } from "../../user/find-user-by-id";

export function makeFindUserByIdService() {
  const userRepository = new PrismaUserRepository();
  const service = new FindUserByIdService(userRepository);

  return service;
}
