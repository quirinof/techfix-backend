// update address service
import { AddressRepository } from "../../repositories/address-repository";
import { Address } from "@prisma/client";
import { z } from "zod";
import { updateAddressSchema } from "../../schemas/address-schema";

type AddressData = z.infer<typeof updateAddressSchema>;

interface UpdateAddressRequest extends AddressData {
  id: number;
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
