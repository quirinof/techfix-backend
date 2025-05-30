import { z } from "zod";
import { PaymentMethod } from "@prisma/client";
import { BillStatus } from "@prisma/client";

export const billSchema = z.object({
  amount: z.number().min(0, "Amount must be a positive number"),
  dueDate: z.union([
    z.string().refine((date) => !isNaN(Date.parse(date)), {
      message: "Due date must be a valid date",
    }),
    z.date(),
  ]),
  paymentMethod: z.nativeEnum(PaymentMethod),
  status: z.nativeEnum(BillStatus).optional(),
  serviceOrderId: z.number().int(),
});

export const updateBillSchema = billSchema.extend({
  amount: z.number().min(0, "Amount must be a positive number").optional(),
  dueDate: z
    .union([
      z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Due date must be a valid date",
      }),
      z.date(),
    ])
    .optional(),
  paymentMethod: z.nativeEnum(PaymentMethod).optional(),
  status: z.nativeEnum(BillStatus).optional(),
  serviceOrderId: z.number().int().optional(),
});

export type billSchemaType = z.infer<typeof billSchema>;
export type updateBillSchemaType = z.infer<typeof updateBillSchema>;
