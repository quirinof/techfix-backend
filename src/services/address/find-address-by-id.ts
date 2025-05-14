// find address by id service
import { Address } from "@prisma/client";
import { AddressRepository } from "../../repositories/address-repository";

interface FindAddressByIdResponse {
  address: Address | null;
}

export class FindAddressByIdService {
  constructor(private addressRepository: AddressRepository) {}

  async findById(id: number): Promise<FindAddressByIdResponse> {
    const address = await this.addressRepository.findById(id);

    return {
      address,
    };
  }
}
