import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { UpdateUserDto, UpdateUserSchema } from './update-user.dto';

// Define the Zod schema
export const UpdateUserRequestSchema = z.object({
  id: z.string().min(1, { message: 'User ID is required' }),
  updateData: UpdateUserSchema,
});

// Create the DTO class from the schema
export class UpdateUserRequestDto extends createZodDto(UpdateUserRequestSchema) {} 