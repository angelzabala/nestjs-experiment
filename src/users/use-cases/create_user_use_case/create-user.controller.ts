import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { CreateUserUseCase } from './create-user.use-case';
import { CreateUserDto, UserSchema } from './dto/create-user.dto';
import { CreateUserResponseSchema } from './dto/create-user-response.dto';

@ApiTags('users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    description: 'Datos del usuario a crear',
    type: createZodDto(CreateUserResponseSchema)
  })
  @ApiResponse({ 
    status: 201, 
    description: 'The user has been successfully created.',
    type: createZodDto(CreateUserResponseSchema)
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