import { AddressRepository } from "../../repositories/address-repository";

export class DeleteAddressByIdService {
  constructor(private addressRepository: AddressRepository) {}

  async handle(id: number): Promise<void> {
    return await this.addressRepository.delete(id);
  }
}
