import { model } from 'mongoose';
import { z } from 'zod';
import { zodSchema } from '@zodyac/zod-mongoose';

const UserZodSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().int().positive().optional() as unknown as z.ZodOptional<z.ZodNumber>,
});

// Generate Mongoose schema from Zod with timestamps
const mongooseSchema = zodSchema(UserZodSchema, {
  timestamps: true, // Handles createdAt and updatedAt automatically
});

// Create Mongoose model
export const UserModel = model('User', mongooseSchema);

// Type definitions
export type User = InstanceType<typeof UserModel> & {
  _id: string;
  __v?: number;
  createdAt?: Date;
  updatedAt?: Date;
};
export type UserData = z.infer<typeof UserZodSchema>;
