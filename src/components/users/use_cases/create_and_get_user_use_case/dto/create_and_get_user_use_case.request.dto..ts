import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

// Exportar el esquema
export const UserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  age: z.number().int().positive().optional() as unknown as z.ZodOptional<z.ZodNumber>,
});

// Create the DTO class from the schema
export class GetUserDto extends createZodDto(UserSchema) {}