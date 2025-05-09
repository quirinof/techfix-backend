import { PrismaCustomerRepository } from "../../../repositories/prisma/prisma-customer-repository";
import { FindCustomerByNameService } from "../../customer/find-customer-by-name";

export function makeFindCustomerByNameService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new FindCustomerByNameService(customerRepository);

  return service;
}
