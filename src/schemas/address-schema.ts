import { z } from "zod";
import { UpdateAddressService } from "../services/address/update-address";

export const addressSchema = z.object({
  street: z
    .string()
    .min(2, "Street must be at least 2 characters long")
    .max(150, "Street must be at most 150 characters long"),
  number: z
    .string()
    .min(1, "Number must be at least 1 character long")
    .max(5, "Number must be at most 5 characters long"),
  complement: z
    .string()
    .max(150, "Complement must be at most 150 characters long")
    .optional()
    .nullable(),
  neighborhood: z
    .string()
    .min(2, "Neighborhood must be at least 2 characters long")
    .max(150, "Neighborhood must be at most 150 characters long"),
  city: z
    .string()
    .min(2, "City must be at least 2 characters long")
    .max(100, "City must be at most 100 characters long"),
  state: z.string().length(2, "State must be exactly 2 characters long"),
  zipCode: z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val))
    .refine(
      (val) => !val || (val.length >= 8 && val.length <= 10),
      "Zip Code must be between 8 and 10 characters"
    )
    .optional()
    .nullable(),
  customerId: z.number().int(),
});

export const updateAddressSchema = addressSchema.extend({
  customerId: z.number().int().optional(),
});
