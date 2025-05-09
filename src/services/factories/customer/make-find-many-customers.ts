import { PrismaCustomerRepository } from "../../../repositories/prisma/prisma-customer-repository";
import { FindManyCustomersService } from "../../customer/find-many-customers";

export function makeFindManyCustomersService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new FindManyCustomersService(customerRepository);

  return service;
}
