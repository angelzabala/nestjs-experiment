import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { ApiProperty } from '@nestjs/swagger';
import '@wahyubucil/nestjs-zod-openapi/boot';
import { patchNestjsSwagger } from '@wahyubucil/nestjs-zod-openapi';

// Exportar el esquema
export const UserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6)
});

// Create the DTO class from the schema
export class CreateUserDto extends createZodDto(UserSchema) {
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

// Antes de crear el documento Swagger
patchNestjsSwagger(); 