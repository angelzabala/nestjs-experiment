import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { User } from '../../../schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';

// Define the Zod schema
export const CreateUserResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().positive().optional(),
  createdAt: z.date(),
});

// Create the DTO class
export class CreateUserResponseDto {
  @ApiProperty({ description: 'The user ID', example: '60d21b4667d0d8992e610c85' })
  readonly id: string;

  @ApiProperty({ description: 'The user name', example: 'John Doe' })
  readonly name: string;

  @ApiProperty({ description: 'The user email', example: 'john.doe@example.com' })
  readonly email: string;

  @ApiProperty({ description: 'The user age', example: 30, required: false })
  readonly age?: number;

  @ApiProperty({ description: 'When the user was created', example: '2023-01-01T00:00:00.000Z' })
  readonly createdAt: Date;

  constructor(user: User) {
    this.id = user['_id'].toString();
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
    this.createdAt = user.createdAt;
    
    // Validate with Zod
    CreateUserResponseSchema.parse(this);
  }
} 