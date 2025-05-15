import { User, Prisma } from "@prisma/client";

export type SafeUser = Omit<User, "password">;

export interface UserRepository {
  create(data: Prisma.UserCreateInput): Promise<SafeUser>;
  findById(id: number): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
