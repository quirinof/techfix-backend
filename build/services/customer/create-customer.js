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

// src/services/customer/create-customer.ts
var create_customer_exports = {};
__export(create_customer_exports, {
  CreateCustomerService: () => CreateCustomerService
});
module.exports = __toCommonJS(create_customer_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateCustomerService
});
