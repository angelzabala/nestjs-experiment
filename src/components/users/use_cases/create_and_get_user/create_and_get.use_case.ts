import { Injectable } from '@nestjs/common';
import { User } from '../../schemas/user.schema';
import { GetUserDto } from './dto/create_and_get_user_use_case.request.dto.';
import { CreateAndGetUserResponseDto } from './dto/create_and_get_user_use_case.response.dto';
import { CreateAndGetUserService } from './create_and_get.service';

@Injectable()
export class CreateAndGetUserUseCase {
  constructor(
    private readonly createUserService: CreateAndGetUserService
  ) {}

  async execute(createUserDto: GetUserDto): Promise<CreateAndGetUserResponseDto> {
    const user = await this.createUserService.createAndGet(createUserDto);
    if(user){
      return new CreateAndGetUserResponseDto(user as User);
    }
    throw new Error('No se pudo crear el usuario');
  }
} 