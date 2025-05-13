import { Address } from "@prisma/client";
import { AddressRepository } from "../../repositories/address-repository";

interface CreateAddressRequest {
  customer: number;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CreateAddressResponse {
  address: Address;
}

export class CreateAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async handle({
    customer,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
  }: CreateAddressRequest): Promise<CreateAddressResponse> {
    const address = await this.addressRepository.create({
      customer: { connect: { id: customer } },
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
