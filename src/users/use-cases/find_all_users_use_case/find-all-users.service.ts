import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { IUserRepository, USER_REPOSITORY } from '../../repositories/user-repository.interface';
import { FindAllUsersRequestDto } from './dto/find-all-users-request.dto';

@Injectable()
export class FindAllUsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async findAll(request: FindAllUsersRequestDto = {}): Promise<User[]> {
    // Here you could implement pagination, filtering, or sorting based on the request
    return this.userRepository.findAll();
  }
} 