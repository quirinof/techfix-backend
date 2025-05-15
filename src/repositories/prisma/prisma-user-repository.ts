import { UserRepository } from "../user-repository";
import { prisma } from "../../lib/prisma";
import { User, Prisma } from "@prisma/client";

export class PrismaUserRepository implements UserRepository {
  async create(data: Prisma.UserCreateInput) {
    const { password, ...user } = await prisma.user.create({ data });

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: number): Promise<User> {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return user;
  }
}
