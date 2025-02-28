import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { FindAllUsersUseCase } from './find-all-users.use-case';
import { FindAllUsersRequestDto } from './dto/find-all-users-request.dto';
import { FindAllUsersResponseDto } from './dto/find-all-users-response.dto';

@ApiTags('users')
@Controller('users')
export class FindAllUsersController {
  constructor(private readonly findAllUsersUseCase: FindAllUsersUseCase) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  @ApiQuery({ name: 'order', required: false, enum: ['asc', 'desc'] })
  @ApiResponse({ 
    status: 200, 
    description: 'List of users retrieved successfully.',
    type: FindAllUsersResponseDto
  })
  async findAll(@Query() query: FindAllUsersRequestDto) {
    return this.findAllUsersUseCase.execute(query);
  }
} 