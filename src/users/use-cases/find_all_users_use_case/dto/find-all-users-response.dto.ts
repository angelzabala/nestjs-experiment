import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { User } from '../../../schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';

// Define the Zod schema for a single user
export const UserDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().positive().optional(),
  createdAt: z.date(),
});

// Define the Zod schema for the response
export const FindAllUsersResponseSchema = z.object({
  users: z.array(UserDtoSchema),
  count: z.number().int().nonnegative(),
});

// Create the UserDto class
export class UserDto {
  @ApiProperty({
    description: 'The user ID',
    example: '507f1f77bcf86cd799439011'
  })
  readonly id: string;

  @ApiProperty({
    description: 'The user name',
    example: 'John Doe'
  })
  readonly name: string;

  @ApiProperty({
    description: 'The user email',
    example: 'john.doe@example.com'
  })
  readonly email: string;

  @ApiProperty({
    description: 'The user age',
    example: 30,
    required: false
  })
  readonly age?: number;

  @ApiProperty({
    description: 'The timestamp when the user was created',
    example: '2023-01-01T00:00:00.000Z'
  })
  readonly createdAt: Date;

  constructor(user: User) {
    this.id = user['_id'].toString();
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
    this.createdAt = user.createdAt;
    
    // Validate with Zod
    UserDtoSchema.parse(this);
  }
}

// Create the FindAllUsersResponseDto class
export class FindAllUsersResponseDto {
  @ApiProperty({
    description: 'Array of users',
    type: [UserDto]
  })
  readonly users: UserDto[];

  @ApiProperty({
    description: 'Total number of users',
    example: 10
  })
  readonly count: number;

  constructor(users: User[]) {
    this.users = users.map(user => new UserDto(user));
    this.count = users.length;
    
    // Validate with Zod
    FindAllUsersResponseSchema.parse(this);
  }
} 