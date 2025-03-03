import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiProperty } from '@nestjs/swagger';
import { createZodDto, zodToOpenAPI } from 'nestjs-zod';
import { CreateAndGetUserUseCase } from './create_and_get.use_case';
import { GetUserDto, UserSchema } from './dto/create_and_get.dto';
import { CreateAndGetUserResponseSchema } from './dto/create_and_get_response.dto';

@ApiTags('users')
@Controller('users/create-and-get')
export class CreateAndGetUserController {
  constructor(private readonly createUserUseCase: CreateAndGetUserUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user and get it' })
  @ApiBody({ description: 'Datos del usuario a crear', schema: zodToOpenAPI(UserSchema) })
  @ApiResponse({ 
    status: 201, 
    description: 'The user has been successfully created.',
    schema: zodToOpenAPI(CreateAndGetUserResponseSchema)
  })    
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createUserDto: ReturnType<typeof createZodDto<typeof CreateAndGetUserResponseSchema>>) {
    console.log(zodToOpenAPI(UserSchema))
    // Crear una nueva instancia de CreateUserDto
    const userData = new GetUserDto();
    // Copiar las propiedades
    Object.assign(userData, createUserDto);
    // Pasar la instancia al caso de uso
    return this.createUserUseCase.execute(userData);
  }
} 