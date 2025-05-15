// find many service
import { AddressRepository } from "../../repositories/address-repository";
import { Address } from "@prisma/client";

interface FindManyAddressesRequest {
  customerId: number;
}

interface FindManyAddressesResponse {
  addresses: Address[];
}

export class FindManyAddressesService {
  constructor(private addressRepository: AddressRepository) {}

  async handle({
    customerId,
  }: FindManyAddressesRequest): Promise<FindManyAddressesResponse> {
    const addresses = await this.addressRepository.findManyByCustomerId(
      customerId
    );

    return { addresses };
  }
}
