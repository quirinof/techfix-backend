import { PrismaAddressRepository } from "../../../repositories/prisma/prisma-address-repository";
import { CreateAddressService } from "../../address/create-address";

export function makeCreateAddressService() {
  const addressRepository = new PrismaAddressRepository();
  const service = new CreateAddressService(addressRepository);

  return service;
}
