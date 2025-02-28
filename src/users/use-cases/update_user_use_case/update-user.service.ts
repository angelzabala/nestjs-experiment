import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { IUserRepository, USER_REPOSITORY } from '../../repositories/user-repository.interface';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.userRepository.update(id, updateUserDto);
  }
} 