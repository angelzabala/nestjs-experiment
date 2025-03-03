import { Injectable, Inject } from '@nestjs/common';
import { GetUserDto } from './dto/create_and_get_user_use_case.request.dto.';
import { User } from '../../schemas/user.schema';
import { IUserRepository, USER_REPOSITORY } from '../../repositories/user_repository.interface';

@Injectable()
export class CreateAndGetUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async create(createUserDto: GetUserDto): Promise<User> {
    try {
      await this.userRepository.create(createUserDto);
      const foundUser = await this.userRepository.get(createUserDto);
      if (!foundUser) {
        throw new Error('User not found');
      }
      return foundUser;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }
} 