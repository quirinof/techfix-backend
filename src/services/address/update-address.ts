// update address service
import { AddressRepository } from "../../repositories/address-repository";
import { Address } from "@prisma/client";

interface UpdateAddressRequest {
  id: number;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

interface UpdateAddressResponse {
  address: Address;
}

export class UpdateAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async handle({
    id,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
  }: UpdateAddressRequest): Promise<UpdateAddressResponse> {
    const address = await this.addressRepository.update(id, {
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      zipCode,
    });

    return { address };
  }
}
