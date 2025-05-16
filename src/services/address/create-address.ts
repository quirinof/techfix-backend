import { Address } from "@prisma/client";
import { AddressRepository } from "../../repositories/address-repository";

interface CreateAddressRequest {
  customerId: number;
  street: string;
  number: string;
  complement?: string | null;
  neighborhood: string;
  city: string;
  state: string;
  zipCode?: string | null;
}

interface CreateAddressResponse {
  address: Address;
}

export class CreateAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async handle({
    customerId,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    zipCode,
  }: CreateAddressRequest): Promise<CreateAddressResponse> {
    const address = await this.addressRepository.create({
      customer: { connect: { id: customerId } },
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
