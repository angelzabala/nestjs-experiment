import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';
import { UpdateUserResponseDto } from './dto/update-user-response.dto';
import { UpdateUserService } from './update-user.service';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private readonly updateUserService: UpdateUserService
  ) {}

  async execute(request: UpdateUserRequestDto): Promise<UpdateUserResponseDto> {
    const user = await this.updateUserService.update(request.id, request.updateData);
    
    if (!user) {
      throw new NotFoundException(`User with ID ${request.id} not found`);
    }
    
    return new UpdateUserResponseDto(user);
  }
} 