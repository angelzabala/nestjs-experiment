import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { User } from '../schemas/user.schema';

// Define the Zod schema con anotación de tipo explícita
export const CreateUserResponseSchema: z.ZodType<{
  id: string;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
}> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().int().positive().optional() as unknown as z.ZodOptional<z.ZodNumber>,
  createdAt: z.date(),
});

// Crear la clase DTO usando createZodDto
export class CreateUserResponseDto extends createZodDto(CreateUserResponseSchema) {
  constructor(user: User) {
    super();
    this.id = user._id.toString();
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
    this.createdAt = user.createdAt;
  }
} 