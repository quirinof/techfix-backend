import { PrismaCustomerRepository } from "../../../repositories/prisma/prisma-customer-repository";
import { UpdateCustomerService } from "../../customer/update-customer";

export function makeUpdateCustomerService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new UpdateCustomerService(customerRepository);

  return service;
}