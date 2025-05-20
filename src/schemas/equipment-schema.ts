import { z } from "zod";
import { DeviceType } from "@prisma/client";

export const equipmentSchema = z.object({
  deviceType: z.nativeEnum(DeviceType),
  brand: z
    .string()
    .min(2, "Brand must be at least 2 characters long")
    .optional(),
  model: z
    .string()
    .min(2, "Model must be at least 2 characters long")
    .optional(),
  serialNumber: z
    .string()
    .min(8, "Serial number must be at least 2 characters long")
    .optional(),
  customerId: z.number().int(),
});

export type equipmentSchemaType = z.infer<typeof equipmentSchema>;
