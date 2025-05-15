import { PrismaUserRepository } from "../../../repositories/prisma/prisma-user-repository";
import { CreateUserService } from "../../user/create-user";

export function makeCreateUserService() {
  const userRepository = new PrismaUserRepository();
  const service = new CreateUserService(userRepository);

  return service;
}
