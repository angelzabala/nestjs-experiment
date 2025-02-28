import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { ApiProperty } from '@nestjs/swagger';

// Define the Zod schema
export const CreateUserSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email format' }),
  age: z.number().int().positive().optional(),
});

// Create the DTO class from the schema
export class CreateUserDto extends createZodDto(CreateUserSchema) {
  @ApiProperty({ 
    description: 'The name of the user',
    example: 'John Doe',
    minLength: 2
  })
  name: string;

  @ApiProperty({ 
    description: 'The email of the user',
    example: 'john.doe@example.com'
  })
  email: string;

  @ApiProperty({ 
    description: 'The age of the user',
    example: 30,
    required: false
  })
  age?: number;
} 