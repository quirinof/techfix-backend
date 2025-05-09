import { PrismaCustomerRepository } from "../../../repositories/prisma/prisma-customer-repository";
import { FindCustomerByIdService } from "../../customer/find-customer-by-id";

export function makeFindCustomerByIdService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new FindCustomerByIdService(customerRepository);

  return service;
}
