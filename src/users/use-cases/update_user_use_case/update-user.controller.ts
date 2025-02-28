import { Controller, Put, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UpdateUserUseCase } from './update-user.use-case';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserRequestSchema } from './dto/update-user-request.dto';
import { UpdateUserResponseDto } from './dto/update-user-response.dto';

@ApiTags('users')
@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  @Put(':id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ 
    status: 200, 
    description: 'User updated successfully.',
    type: UpdateUserResponseDto
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async update(@Param('id') id: string, @Body() updateData: UpdateUserDto) {
    const request = UpdateUserRequestSchema.parse({ id, updateData });
    return this.updateUserUseCase.execute(request);
  }
} 