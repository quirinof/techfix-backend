// make find address by id factory
import { PrismaAddressRepository } from "../../../repositories/prisma/prisma-address-repository";
import { FindAddressByIdService } from "../../address/find-address-by-id";

export function makeFindAddressByIdService() {
  const addressRepository = new PrismaAddressRepository();
  const service = new FindAddressByIdService(addressRepository);

  return service;
}
