import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user_use_case.request.dto';
import { CreateUserResponseDto } from './dto/create_user_use_case.response.dto';
import { CreateUserService } from './create_user.service';
import { User } from '../../schemas/user.schema';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly createUserService: CreateUserService
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<CreateUserResponseDto> {
    const user = await this.createUserService.create(createUserDto);
    if(user){
      return new CreateUserResponseDto(user as User);
    }
    throw new Error('No se pudo crear el usuario');
  }
} 