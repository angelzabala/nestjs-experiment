import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

// Define the Zod schema
export const FindOneUserRequestSchema = z.object({
  id: z.string().min(1, { message: 'User ID is required' }),
});

// Create the DTO class from the schema
export class FindOneUserRequestDto extends createZodDto(FindOneUserRequestSchema) {} 