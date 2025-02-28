import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { IUserRepository, USER_REPOSITORY } from '../../repositories/user-repository.interface';

@Injectable()
export class FindOneUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async findOne(id: string): Promise<User | null> {
    return this.userRepository.findOne(id);
  }
} 