import { PrismaCustomerRepository } from "../../../repositories/prisma/prisma-customer-repository";
import { FindCustomerService } from "../../customer/find-customer";

export function makeFindCustomerService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new FindCustomerService(customerRepository);

  return service;
}
