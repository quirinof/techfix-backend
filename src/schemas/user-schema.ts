import { z } from "zod";

export const userSchema = {
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email format").optional(),
  password: z.string().min(6, "Name must be at least 6 characters long"),
};

export const createUserSchema = z.object({
  ...userSchema,
});
