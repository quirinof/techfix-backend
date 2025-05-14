import { PrismaAddressRepository } from "../../../repositories/prisma/prisma-address-repository";
import { UpdateAddressService } from "../../address/update-address";

export function makeUpdateAddressService() {
  const addressRepository = new PrismaAddressRepository();
  const service = new UpdateAddressService(addressRepository);

  return service;
}
