import { Customer, Prisma } from "@prisma/client";
export interface FindManyParams {
  skip: number;
  take: number;
}
export interface CustomerRepository {
  create(data: Prisma.CustomerCreateInput): Promise<Customer>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Customer>;
  findMany({ skip, take }: FindManyParams): Promise<Customer[]>;
  findManyByName(name: string): Promise<Customer[]>;
  count(): Promise<number>;
}
