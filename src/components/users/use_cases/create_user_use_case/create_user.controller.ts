import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { createZodDto, zodToOpenAPI } from 'nestjs-zod';
import { CreateUserUseCase } from './create_user.use_case';
import { CreateUserDto, UserSchema } from './dto/create_user_use_case.request.dto';
import { CreateUserResponseSchema } from './dto/create_user_use_case.response.dto';

@ApiTags('users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ description: 'Datos del usuario a crear', schema: zodToOpenAPI(UserSchema) })
  @ApiResponse({ 
    status: 201, 
    description: 'The user has been successfully created.',
    schema: zodToOpenAPI(CreateUserResponseSchema)
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createUserDto: ReturnType<typeof createZodDto<typeof CreateUserResponseSchema>>) {
    // Crear una nueva instancia de CreateUserDto
    const userData = new CreateUserDto();
    // Copiar las propiedades
    Object.assign(userData, createUserDto);
    // Pasar la instancia al caso de uso
    return this.createUserUseCase.execute(userData);
  }
} 