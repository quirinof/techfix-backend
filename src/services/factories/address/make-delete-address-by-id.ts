import { PrismaAddressRepository } from "../../../repositories/prisma/prisma-address-repository";
import { DeleteAddressByIdService } from "../../address/delete-address-by-id";

export function makeDeleteAddressByIdService() {
  const addressRepository = new PrismaAddressRepository();
  const service = new DeleteAddressByIdService(addressRepository);

  return service;
}
