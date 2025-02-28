import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { UserData } from '../../../schemas/user.schema';

// Define the Zod schema con anotación de tipo explícita
export const CreateAndGetUserResponseSchema: z.ZodType<{
  createdUser: UserData,
  foundUser: UserData,
  
}> = z.object({
  createdUser: z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string().email(),
    age: z.number().int().positive().optional() as unknown as z.ZodOptional<z.ZodNumber>,
    createdAt: z.date(),
  }),
  foundUser: z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string().email(),
    age: z.number().int().positive().optional() as unknown as z.ZodOptional<z.ZodNumber>,
    createdAt: z.date(),
  }),
});

// Crear la clase DTO usando createZodDto
export class CreateAndGetUserResponseDto extends createZodDto(CreateAndGetUserResponseSchema) {
  constructor(user: UserData) {
    super();
    this.createdUser = user;
    this.foundUser = user;
  }
} 