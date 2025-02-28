import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6)
});

export type User = {
  _id: string | { toString(): string };
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
}; 