import { z } from "zod";
import { ServiceOrderItemStatus } from "@prisma/client";

export const serviceOrderItemSchema = z.object({
  description: z.string().min(1, "Description cannot be empty").optional(),
  status: z.nativeEnum(ServiceOrderItemStatus).default("pending"),
  equipmentId: z.number().int().positive().optional(),
  serviceOrderId: z.number().int().positive(),
});

export const updateServiceOrderItemSchema = serviceOrderItemSchema.extend({
  serviceOrderId: z.number().int().positive().optional(),
});

export type ServiceOrderItemSchemaType = z.infer<typeof serviceOrderItemSchema>;
export type UpdateServiceOrderItemSchemaType = z.infer<
  typeof updateServiceOrderItemSchema
>;
