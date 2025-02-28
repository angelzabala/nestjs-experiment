import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserSchema } from '../../create_user_use_case/dto/create-user.dto';

// Define the Zod schema by making all fields from CreateUserSchema optional
export const UpdateUserSchema = CreateUserSchema.partial();

// Create the DTO class from the schema
export class UpdateUserDto extends createZodDto(UpdateUserSchema) {
  @ApiProperty({ 
    description: 'The name of the user',
    example: 'John Doe',
    required: false
  })
  name?: string;

  @ApiProperty({ 
    description: 'The email of the user',
    example: 'john.doe@example.com',
    required: false
  })
  email?: string;

  @ApiProperty({ 
    description: 'The age of the user',
    example: 30,
    required: false
  })
  age?: number;
} 