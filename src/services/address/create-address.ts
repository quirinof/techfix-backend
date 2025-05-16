import { Address } from "@prisma/client";
import { AddressRepository } from "../../repositories/address-repository";
import { z } from "zod";
import { addressSchema } from "../../schemas/address-schema";

type CreateAddressRequest = z.infer<typeof addressSchema>;

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
