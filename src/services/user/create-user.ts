import { SafeUser, UserRepository } from "../../repositories/user-repository";
import * as bcrypt from "bcrypt";

interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

interface CreateUserResponse {
  user: SafeUser;
}

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async handle({
    email,
    name,
    password,
  }: CreateUserRequest): Promise<CreateUserResponse> {
    const hash = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      email,
      name,
      password: hash,
    });

    return { user };
  }
}
