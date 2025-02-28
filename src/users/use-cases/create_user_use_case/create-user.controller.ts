import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { CreateUserUseCase } from './create-user.use-case';
import { UserSchema } from './dto/create-user.dto';
import { CreateUserResponseSchema } from './dto/create-user-response.dto';

@ApiTags('users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    description: 'Datos del usuario a crear',
    type: createZodDto(UserSchema)
  })
  @ApiResponse({ 
    status: 201, 
    description: 'The user has been successfully created.',
    type: createZodDto(CreateUserResponseSchema)
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(@Body() createUserDto: ReturnType<typeof createZodDto<typeof UserSchema>>) {
    // Pasa directamente el DTO al caso de uso
    return this.createUserUseCase.execute(createUserDto);
  }
} 