import { CustomerRepository } from "../customer-repository";
import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";

export class PrismaCustomerRepository implements CustomerRepository {
  async create(data: Prisma.CustomerCreateInput) {
    const customer = await prisma.customer.create({ data });

    return customer;
  }

  async findMany() {
    return prisma.customer.findMany();
  }

  async findManyByName(name: string) {
    return prisma.customer.findMany({ where: { name } });
  }
}
