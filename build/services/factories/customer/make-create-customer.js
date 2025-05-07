"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/services/factories/customer/make-create-customer.ts
var make_create_customer_exports = {};
__export(make_create_customer_exports, {
  makeCreateCustomerService: () => makeCreateCustomerService
});
module.exports = __toCommonJS(make_create_customer_exports);

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();

// src/repositories/prisma/prisma-customer-repository.ts
var PrismaCustomerRepository = class {
  async create(data) {
    const customer = await prisma.customer.create({ data });
    return customer;
  }
  async findMany() {
    return prisma.customer.findMany();
  }
  async findManyByName(name) {
    return prisma.customer.findMany({ where: { name } });
  }
};

// src/services/customer/create-customer.ts
var CreateCustomerService = class {
  constructor(customerRepository) {
    this.customerRepository = customerRepository;
  }
  async handle({
    name,
    email,
    phone
  }) {
    const customer = await this.customerRepository.create({
      name,
      email,
      phone
    });
    return {
      customer
    };
  }
};

// src/services/factories/customer/make-create-customer.ts
function makeCreateCustomerService() {
  const customerRepository = new PrismaCustomerRepository();
  const service = new CreateCustomerService(customerRepository);
  return service;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeCreateCustomerService
});
