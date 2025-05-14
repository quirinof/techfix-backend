// make find many addresses service
import { PrismaAddressRepository } from "../../../repositories/prisma/prisma-address-repository";
import { FindManyAddressesService } from "../../address/find-many-addresses";

export function makeFindManyAddressesService() {
  const addressRepository = new PrismaAddressRepository();
  const service = new FindManyAddressesService(addressRepository);

  return service;
}
