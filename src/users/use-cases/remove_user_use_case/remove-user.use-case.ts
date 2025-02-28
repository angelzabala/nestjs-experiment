import { Injectable, NotFoundException } from '@nestjs/common';
import { RemoveUserRequestDto } from './dto/remove-user-request.dto';
import { RemoveUserResponseDto } from './dto/remove-user-response.dto';
import { RemoveUserService } from './remove-user.service';

@Injectable()
export class RemoveUserUseCase {
  constructor(
    private readonly removeUserService: RemoveUserService
  ) {}

  async execute(request: RemoveUserRequestDto): Promise<RemoveUserResponseDto> {
    const user = await this.removeUserService.remove(request.id);
    
    if (!user) {
      throw new NotFoundException(`User with ID ${request.id} not found`);
    }
    
    return new RemoveUserResponseDto(user);
  }
} 