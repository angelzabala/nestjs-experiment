import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { RemoveUserUseCase } from './remove-user.use-case';
import { RemoveUserRequestSchema } from './dto/remove-user-request.dto';
import { RemoveUserResponseDto } from './dto/remove-user-response.dto';

@ApiTags('users')
@Controller('users')
export class RemoveUserController {
  constructor(private readonly removeUserUseCase: RemoveUserUseCase) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'User removed successfully.',
    type: RemoveUserResponseDto
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async remove(@Param('id') id: string) {
    const request = RemoveUserRequestSchema.parse({ id });
    return this.removeUserUseCase.execute(request);
  }
} 