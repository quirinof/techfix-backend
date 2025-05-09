import { CustomerRepository, FindManyParams } from "../customer-repository";
import { prisma } from "../../lib/prisma";
import { Customer, Prisma } from "@prisma/client";

export class PrismaCustomerRepository implements CustomerRepository {
  async create(data: Prisma.CustomerCreateInput) {
    const customer = await prisma.customer.create({ data });

    return customer;
  }

  async findById(id: number): Promise<Customer> {
    const customer = await prisma.customer.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return customer;
  }

  async findMany({ skip, take }: FindManyParams): Promise<Customer[]> {
    return await prisma.customer.findMany({
      skip,
      take,
    });
  }

  async count(): Promise<number> {
    return await prisma.customer.count();
  }

  async findManyByName(name: string) {
    const customer = await prisma.customer.findMany({
      where: { name: { contains: name, mode: "insensitive" } },
    });

    return customer;
  }
}
