import { User } from "@prisma/client";
import { UserRepository } from "../../repositories/user-repository";

interface UserResponse {
  user: User;
}

export class FindUserByEmailService {
  constructor(private userRepository: UserRepository) {}

  async handle(email: string): Promise<UserResponse> {
    const user = await this.userRepository.findByEmail(email);

    return {
      user,
    };
  }
}
