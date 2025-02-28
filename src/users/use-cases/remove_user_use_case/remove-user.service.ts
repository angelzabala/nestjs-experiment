import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { IUserRepository, USER_REPOSITORY } from '../../repositories/user-repository.interface';

@Injectable()
export class RemoveUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async remove(id: string): Promise<User | null> {
    return this.userRepository.remove(id);
  }
} 