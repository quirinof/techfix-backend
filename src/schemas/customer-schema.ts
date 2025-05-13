import { z } from "zod";
import { DocumentType } from "@prisma/client";

export const customerSchema = {
  name: z.string().min(2, "Name must be at least 2 characters long"),
  document: z.string().min(9, "Document must be at least 9 characters long").optional(),
  documentType: z.nativeEnum(DocumentType).optional(),
  email: z.string().email("Invalid email format").optional(),
  phone: z.string().min(11, "Phone must be at least 11 characters long").optional(),
};

export const createCustomerSchema = z.object({
  ...customerSchema,
});

export const updateCustomerSchema = z.object({
  name: customerSchema.name.optional(),
  document: customerSchema.document,
  documentType: customerSchema.documentType,
  email: customerSchema.email,
  phone: customerSchema.phone,
});