import { Prisma, Address } from "@prisma/client";
import { AddressRepository } from "../address-repository";
import { prisma } from "../../lib/prisma";

export class PrismaAddressRepository implements AddressRepository {
  async create(data: Prisma.AddressCreateInput): Promise<Address> {
    const address = await prisma.address.create({ data });

    return address;
  }

  async findManyByCustomerId(customerId: number): Promise<Address[]> {
    const addresses = await prisma.address.findMany({
      where: {
        customerId,
      },
    });

    return addresses;
  }

  async findById(id: number, customerId: number): Promise<Address | null> {
    const address = await prisma.address.findFirst({
      where: {
        id,
        customerId,
      },
    });

    return address;
  }

  async update(id: number, data: Prisma.AddressUpdateInput): Promise<Address> {
    const address = await prisma.address.update({
      where: {
        id,
      },
      data,
    });

    return address;
  }

  async delete(id: number): Promise<void> {
    await prisma.address.delete({
      where: {
        id,
      },
    });
  }
}
