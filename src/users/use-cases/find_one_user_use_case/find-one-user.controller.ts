import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { FindOneUserUseCase } from './find-one-user.use-case';
import { FindOneUserRequestSchema } from './dto/find-one-user-request.dto';
import { FindOneUserResponseDto } from './dto/find-one-user-response.dto';

@ApiTags('users')
@Controller('users')
export class FindOneUserController {
  constructor(private readonly findOneUserUseCase: FindOneUserUseCase) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'User found successfully.',
    type: FindOneUserResponseDto
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async findOne(@Param('id') id: string) {
    const request = FindOneUserRequestSchema.parse({ id });
    return this.findOneUserUseCase.execute(request);
  }
} 