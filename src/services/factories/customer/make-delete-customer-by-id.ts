import { PrismaCustomerRepository } from "../../../repositories/prisma/prisma-customer-repository";
import { DeleteCustomerByIdService } from "../../customer/delete-customer-by-id";

export function makeDeleteCustomerByIdService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new DeleteCustomerByIdService(customerRepository);

  return service;
}
