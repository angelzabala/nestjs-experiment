import { Injectable } from '@nestjs/common';
import { FindAllUsersRequestDto } from './dto/find-all-users-request.dto';
import { FindAllUsersResponseDto } from './dto/find-all-users-response.dto';
import { FindAllUsersService } from './find-all-users.service';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    private readonly findAllUsersService: FindAllUsersService
  ) {}

  async execute(request: FindAllUsersRequestDto = {}): Promise<FindAllUsersResponseDto> {
    const users = await this.findAllUsersService.findAll(request);
    return new FindAllUsersResponseDto(users);
  }
} 