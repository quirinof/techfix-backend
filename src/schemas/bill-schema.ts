import { z } from "zod";
import { PaymentMethod } from "@prisma/client";
import { BillStatus } from "@prisma/client";

export const billSchema = z.object({
  amount: z.number().min(0, "Amount must be a positive number"),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Due date must be a valid date",
  }),
  paymentMethod: z.nativeEnum(PaymentMethod),
  status: z.nativeEnum(BillStatus),
  serviceOrderId: z.number().int(),
});

export const updateBillSchema = billSchema.extend({
  amount: z.number().min(0, "Amount must be a positive number").optional(),
  dueDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Due date must be a valid date",
    })
    .optional(),
  paymentMethod: z.nativeEnum(PaymentMethod).optional(),
  status: z.nativeEnum(BillStatus).optional(),
});

export type billSchemaType = z.infer<typeof billSchema>;
export type updateBillSchemaType = z.infer<typeof updateBillSchema>;
