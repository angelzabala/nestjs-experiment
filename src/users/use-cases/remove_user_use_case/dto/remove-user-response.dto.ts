import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { User } from '../../../schemas/user.schema';
import { ApiProperty } from '@nestjs/swagger';

// Define the Zod schema
export const RemoveUserResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  deleted: z.boolean(),
  deletedAt: z.date(),
});

// Create the DTO class
export class RemoveUserResponseDto {
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
    description: 'Indicates if the user was successfully deleted',
    example: true
  })
  readonly deleted: boolean;

  @ApiProperty({
    description: 'The timestamp when the user was deleted',
    example: '2023-01-01T00:00:00.000Z'
  })
  readonly deletedAt: Date;

  constructor(user: User) {
    this.id = user['_id'].toString();
    this.name = user.name;
    this.email = user.email;
    this.deleted = true;
    this.deletedAt = new Date();
    
    // Validate with Zod
    RemoveUserResponseSchema.parse(this);
  }
} 