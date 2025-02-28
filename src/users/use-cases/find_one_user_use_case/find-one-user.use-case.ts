import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneUserRequestDto } from './dto/find-one-user-request.dto';
import { FindOneUserResponseDto } from './dto/find-one-user-response.dto';
import { FindOneUserService } from './find-one-user.service';

@Injectable()
export class FindOneUserUseCase {
  constructor(
    private readonly findOneUserService: FindOneUserService
  ) {}

  async execute(request: FindOneUserRequestDto): Promise<FindOneUserResponseDto> {
    const user = await this.findOneUserService.findOne(request.id);
    
    if (!user) {
      throw new NotFoundException(`User with ID ${request.id} not found`);
    }
    
    return new FindOneUserResponseDto(user);
  }
} 