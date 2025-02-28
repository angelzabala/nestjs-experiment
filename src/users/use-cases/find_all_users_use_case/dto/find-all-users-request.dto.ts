import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { ApiProperty } from '@nestjs/swagger';

// Define the Zod schema
export const FindAllUsersRequestSchema: z.ZodType<{
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
}> = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
  sortBy: z.string().optional(),
  order: z.enum(['asc', 'desc']).optional()
});

// Create the DTO class from the schema
export class FindAllUsersRequestDto extends createZodDto(FindAllUsersRequestSchema) {
  @ApiProperty({ 
    description: 'Page number for pagination',
    example: 1,
    required: false
  })
  page?: number;

  @ApiProperty({ 
    description: 'Number of items per page',
    example: 10,
    required: false
  })
  limit?: number;

  @ApiProperty({ 
    description: 'Field to sort by',
    example: 'name',
    required: false
  })
  sortBy?: string;

  @ApiProperty({ 
    description: 'Sort order',
    enum: ['asc', 'desc'],
    example: 'asc',
    required: false
  })
  order?: 'asc' | 'desc';
} 