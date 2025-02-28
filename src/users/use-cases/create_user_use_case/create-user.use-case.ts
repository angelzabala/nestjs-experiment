import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
import { CreateUserService } from './create-user.service';
import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { UserSchema } from './schemas/user.schema';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly createUserService: CreateUserService
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<CreateUserResponseDto> {
    const user = await this.createUserService.create(createUserDto);
    return new CreateUserResponseDto(user);
  }
} 