"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/app.ts
var import_express2 = __toESM(require("express"));

// src/routes/customer.ts
var import_express = require("express");

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

// src/controllers/customer/create.ts
var create = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const createCustomerService = makeCreateCustomerService();
    const { customer } = await createCustomerService.handle({
      name,
      email,
      phone
    });
    res.status(201).json({ customer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

// src/routes/customer.ts
var customerRoutes = (0, import_express.Router)();
customerRoutes.post("/customers", create);

// src/app.ts
var app = (0, import_express2.default)();
app.use(import_express2.default.json());
app.use("/", customerRoutes);

// src/server.ts
var PORT = 3e3;
app.listen(PORT, () => console.log(`servidor executando na porta ${PORT}`));
