import { User } from "@prisma/client";
import { UserRepository } from "../../repositories/user-repository";

interface UserResponse {
  user: User;
}

export class FindUserByIdService {
  constructor(private userRepository: UserRepository) {}

  async handle(id: number): Promise<UserResponse> {
    const user = await this.userRepository.findById(id);

    return {
      user,
    };
  }
}
