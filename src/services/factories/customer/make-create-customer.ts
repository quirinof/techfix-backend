import { PrismaCustomerRepository } from "../../../repositories/prisma/prisma-customer-repository";
import { CreateCustomerService } from "../../customer/create-customer";

export function makeCreateCustomerService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new CreateCustomerService(customerRepository);

  return service;
}
