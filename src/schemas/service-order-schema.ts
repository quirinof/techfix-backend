import { z } from "zod";
import { ServiceOrderStatus } from "@prisma/client";

export const serviceOrderSchema = z.object({
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long"),
  status: z.nativeEnum(ServiceOrderStatus).optional(),
  estimate: z.number().min(0, "Estimate must be a positive number").optional(),
  customerId: z.number().int(),
});

export const updateServiceOrderSchema = serviceOrderSchema.extend({
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long")
    .optional(),
  customerId: z.number().int().optional(),
});

export type serviceOrderSchemaType = z.infer<typeof serviceOrderSchema>;
export type updateServiceOrderSchemaType = z.infer<
  typeof updateServiceOrderSchema
>;
