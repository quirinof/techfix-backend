
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model ServiceOrder
 * 
 */
export type ServiceOrder = $Result.DefaultSelection<Prisma.$ServiceOrderPayload>
/**
 * Model ServiceOrderItem
 * 
 */
export type ServiceOrderItem = $Result.DefaultSelection<Prisma.$ServiceOrderItemPayload>
/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeviceType: {
  notebook: 'notebook',
  smartphone: 'smartphone',
  tablet: 'tablet',
  desktop: 'desktop',
  other: 'other'
};

export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType]


export const ServiceOrderStatus: {
  open: 'open',
  inProgress: 'inProgress',
  completed: 'completed',
  canceled: 'canceled'
};

export type ServiceOrderStatus = (typeof ServiceOrderStatus)[keyof typeof ServiceOrderStatus]


export const ServiceOrderItemStatus: {
  pending: 'pending',
  executing: 'executing',
  completed: 'completed'
};

export type ServiceOrderItemStatus = (typeof ServiceOrderItemStatus)[keyof typeof ServiceOrderItemStatus]


export const PaymentMethod: {
  cash: 'cash',
  creditCard: 'creditCard',
  debitCard: 'debitCard',
  pix: 'pix',
  boleto: 'boleto'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const BillStatus: {
  pending: 'pending',
  paid: 'paid',
  overdue: 'overdue'
};

export type BillStatus = (typeof BillStatus)[keyof typeof BillStatus]

}

export type DeviceType = $Enums.DeviceType

export const DeviceType: typeof $Enums.DeviceType

export type ServiceOrderStatus = $Enums.ServiceOrderStatus

export const ServiceOrderStatus: typeof $Enums.ServiceOrderStatus

export type ServiceOrderItemStatus = $Enums.ServiceOrderItemStatus

export const ServiceOrderItemStatus: typeof $Enums.ServiceOrderItemStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type BillStatus = $Enums.BillStatus

export const BillStatus: typeof $Enums.BillStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceOrder`: Exposes CRUD operations for the **ServiceOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceOrders
    * const serviceOrders = await prisma.serviceOrder.findMany()
    * ```
    */
  get serviceOrder(): Prisma.ServiceOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceOrderItem`: Exposes CRUD operations for the **ServiceOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceOrderItems
    * const serviceOrderItems = await prisma.serviceOrderItem.findMany()
    * ```
    */
  get serviceOrderItem(): Prisma.ServiceOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Address: 'Address',
    Equipment: 'Equipment',
    ServiceOrder: 'ServiceOrder',
    ServiceOrderItem: 'ServiceOrderItem',
    Bill: 'Bill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "address" | "equipment" | "serviceOrder" | "serviceOrderItem" | "bill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      ServiceOrder: {
        payload: Prisma.$ServiceOrderPayload<ExtArgs>
        fields: Prisma.ServiceOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          findFirst: {
            args: Prisma.ServiceOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          findMany: {
            args: Prisma.ServiceOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          create: {
            args: Prisma.ServiceOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          createMany: {
            args: Prisma.ServiceOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          delete: {
            args: Prisma.ServiceOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          update: {
            args: Prisma.ServiceOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          deleteMany: {
            args: Prisma.ServiceOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          upsert: {
            args: Prisma.ServiceOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          aggregate: {
            args: Prisma.ServiceOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceOrder>
          }
          groupBy: {
            args: Prisma.ServiceOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderCountAggregateOutputType> | number
          }
        }
      }
      ServiceOrderItem: {
        payload: Prisma.$ServiceOrderItemPayload<ExtArgs>
        fields: Prisma.ServiceOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          findFirst: {
            args: Prisma.ServiceOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          findMany: {
            args: Prisma.ServiceOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>[]
          }
          create: {
            args: Prisma.ServiceOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          createMany: {
            args: Prisma.ServiceOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>[]
          }
          delete: {
            args: Prisma.ServiceOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          update: {
            args: Prisma.ServiceOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.ServiceOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.ServiceOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          aggregate: {
            args: Prisma.ServiceOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceOrderItem>
          }
          groupBy: {
            args: Prisma.ServiceOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderItemCountAggregateOutputType> | number
          }
        }
      }
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    address?: AddressOmit
    equipment?: EquipmentOmit
    serviceOrder?: ServiceOrderOmit
    serviceOrderItem?: ServiceOrderItemOmit
    bill?: BillOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    addresses: number
    equipment: number
    serviceOrders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | CustomerCountOutputTypeCountAddressesArgs
    equipment?: boolean | CustomerCountOutputTypeCountEquipmentArgs
    serviceOrders?: boolean | CustomerCountOutputTypeCountServiceOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountServiceOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    serviceOrderItems: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOrderItems?: boolean | EquipmentCountOutputTypeCountServiceOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountServiceOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderItemWhereInput
  }


  /**
   * Count Type ServiceOrderCountOutputType
   */

  export type ServiceOrderCountOutputType = {
    items: number
  }

  export type ServiceOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ServiceOrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderCountOutputType
     */
    select?: ServiceOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    createdAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    phone: string | null
    email: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    equipment?: boolean | Customer$equipmentArgs<ExtArgs>
    serviceOrders?: boolean | Customer$serviceOrdersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    equipment?: boolean | Customer$equipmentArgs<ExtArgs>
    serviceOrders?: boolean | Customer$serviceOrdersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      equipment: Prisma.$EquipmentPayload<ExtArgs>[]
      serviceOrders: Prisma.$ServiceOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string | null
      email: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Customer$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipment<T extends Customer$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Customer$equipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serviceOrders<T extends Customer$serviceOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$serviceOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.addresses
   */
  export type Customer$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Customer.equipment
   */
  export type Customer$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Customer.serviceOrders
   */
  export type Customer$serviceOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    cursor?: ServiceOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    complement: string | null
    street: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    customerId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    complement: string | null
    street: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    customerId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    complement: number
    street: number
    neighborhood: number
    city: number
    state: number
    customerId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    complement?: true
    street?: true
    neighborhood?: true
    city?: true
    state?: true
    customerId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    complement?: true
    street?: true
    neighborhood?: true
    city?: true
    state?: true
    customerId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    complement?: true
    street?: true
    neighborhood?: true
    city?: true
    state?: true
    customerId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    complement: string | null
    street: string | null
    neighborhood: string | null
    city: string | null
    state: string | null
    customerId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complement?: boolean
    street?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complement?: boolean
    street?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    complement?: boolean
    street?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    complement?: boolean
    street?: boolean
    neighborhood?: boolean
    city?: boolean
    state?: boolean
    customerId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "complement" | "street" | "neighborhood" | "city" | "state" | "customerId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      complement: string | null
      street: string | null
      neighborhood: string | null
      city: string | null
      state: string | null
      customerId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly complement: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly customerId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: number | null
    deviceType: $Enums.DeviceType | null
    brand: string | null
    model: string | null
    serialNumber: string | null
    createdAt: Date | null
    customerId: number | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: number | null
    deviceType: $Enums.DeviceType | null
    brand: string | null
    model: string | null
    serialNumber: string | null
    createdAt: Date | null
    customerId: number | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    deviceType: number
    brand: number
    model: number
    serialNumber: number
    createdAt: number
    customerId: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    deviceType?: true
    brand?: true
    model?: true
    serialNumber?: true
    createdAt?: true
    customerId?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    deviceType?: true
    brand?: true
    model?: true
    serialNumber?: true
    createdAt?: true
    customerId?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    deviceType?: true
    brand?: true
    model?: true
    serialNumber?: true
    createdAt?: true
    customerId?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: number
    deviceType: $Enums.DeviceType
    brand: string | null
    model: string | null
    serialNumber: string | null
    createdAt: Date
    customerId: number
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceType?: boolean
    brand?: boolean
    model?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    serviceOrderItems?: boolean | Equipment$serviceOrderItemsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceType?: boolean
    brand?: boolean
    model?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deviceType?: boolean
    brand?: boolean
    model?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    deviceType?: boolean
    brand?: boolean
    model?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    customerId?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deviceType" | "brand" | "model" | "serialNumber" | "createdAt" | "customerId", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    serviceOrderItems?: boolean | Equipment$serviceOrderItemsArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      serviceOrderItems: Prisma.$ServiceOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deviceType: $Enums.DeviceType
      brand: string | null
      model: string | null
      serialNumber: string | null
      createdAt: Date
      customerId: number
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    serviceOrderItems<T extends Equipment$serviceOrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$serviceOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'Int'>
    readonly deviceType: FieldRef<"Equipment", 'DeviceType'>
    readonly brand: FieldRef<"Equipment", 'String'>
    readonly model: FieldRef<"Equipment", 'String'>
    readonly serialNumber: FieldRef<"Equipment", 'String'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly customerId: FieldRef<"Equipment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.serviceOrderItems
   */
  export type Equipment$serviceOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    where?: ServiceOrderItemWhereInput
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    cursor?: ServiceOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model ServiceOrder
   */

  export type AggregateServiceOrder = {
    _count: ServiceOrderCountAggregateOutputType | null
    _avg: ServiceOrderAvgAggregateOutputType | null
    _sum: ServiceOrderSumAggregateOutputType | null
    _min: ServiceOrderMinAggregateOutputType | null
    _max: ServiceOrderMaxAggregateOutputType | null
  }

  export type ServiceOrderAvgAggregateOutputType = {
    id: number | null
    estimate: Decimal | null
    customerId: number | null
  }

  export type ServiceOrderSumAggregateOutputType = {
    id: number | null
    estimate: Decimal | null
    customerId: number | null
  }

  export type ServiceOrderMinAggregateOutputType = {
    id: number | null
    description: string | null
    status: $Enums.ServiceOrderStatus | null
    estimate: Decimal | null
    createdAt: Date | null
    customerId: number | null
  }

  export type ServiceOrderMaxAggregateOutputType = {
    id: number | null
    description: string | null
    status: $Enums.ServiceOrderStatus | null
    estimate: Decimal | null
    createdAt: Date | null
    customerId: number | null
  }

  export type ServiceOrderCountAggregateOutputType = {
    id: number
    description: number
    status: number
    estimate: number
    createdAt: number
    customerId: number
    _all: number
  }


  export type ServiceOrderAvgAggregateInputType = {
    id?: true
    estimate?: true
    customerId?: true
  }

  export type ServiceOrderSumAggregateInputType = {
    id?: true
    estimate?: true
    customerId?: true
  }

  export type ServiceOrderMinAggregateInputType = {
    id?: true
    description?: true
    status?: true
    estimate?: true
    createdAt?: true
    customerId?: true
  }

  export type ServiceOrderMaxAggregateInputType = {
    id?: true
    description?: true
    status?: true
    estimate?: true
    createdAt?: true
    customerId?: true
  }

  export type ServiceOrderCountAggregateInputType = {
    id?: true
    description?: true
    status?: true
    estimate?: true
    createdAt?: true
    customerId?: true
    _all?: true
  }

  export type ServiceOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrder to aggregate.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceOrders
    **/
    _count?: true | ServiceOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceOrderMaxAggregateInputType
  }

  export type GetServiceOrderAggregateType<T extends ServiceOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceOrder[P]>
      : GetScalarType<T[P], AggregateServiceOrder[P]>
  }




  export type ServiceOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithAggregationInput | ServiceOrderOrderByWithAggregationInput[]
    by: ServiceOrderScalarFieldEnum[] | ServiceOrderScalarFieldEnum
    having?: ServiceOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceOrderCountAggregateInputType | true
    _avg?: ServiceOrderAvgAggregateInputType
    _sum?: ServiceOrderSumAggregateInputType
    _min?: ServiceOrderMinAggregateInputType
    _max?: ServiceOrderMaxAggregateInputType
  }

  export type ServiceOrderGroupByOutputType = {
    id: number
    description: string | null
    status: $Enums.ServiceOrderStatus
    estimate: Decimal | null
    createdAt: Date
    customerId: number
    _count: ServiceOrderCountAggregateOutputType | null
    _avg: ServiceOrderAvgAggregateOutputType | null
    _sum: ServiceOrderSumAggregateOutputType | null
    _min: ServiceOrderMinAggregateOutputType | null
    _max: ServiceOrderMaxAggregateOutputType | null
  }

  type GetServiceOrderGroupByPayload<T extends ServiceOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceOrderGroupByOutputType[P]>
        }
      >
    >


  export type ServiceOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    status?: boolean
    estimate?: boolean
    createdAt?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | ServiceOrder$itemsArgs<ExtArgs>
    bill?: boolean | ServiceOrder$billArgs<ExtArgs>
    _count?: boolean | ServiceOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    status?: boolean
    estimate?: boolean
    createdAt?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    status?: boolean
    estimate?: boolean
    createdAt?: boolean
    customerId?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectScalar = {
    id?: boolean
    description?: boolean
    status?: boolean
    estimate?: boolean
    createdAt?: boolean
    customerId?: boolean
  }

  export type ServiceOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "status" | "estimate" | "createdAt" | "customerId", ExtArgs["result"]["serviceOrder"]>
  export type ServiceOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | ServiceOrder$itemsArgs<ExtArgs>
    bill?: boolean | ServiceOrder$billArgs<ExtArgs>
    _count?: boolean | ServiceOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ServiceOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ServiceOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceOrder"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      items: Prisma.$ServiceOrderItemPayload<ExtArgs>[]
      bill: Prisma.$BillPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      status: $Enums.ServiceOrderStatus
      estimate: Prisma.Decimal | null
      createdAt: Date
      customerId: number
    }, ExtArgs["result"]["serviceOrder"]>
    composites: {}
  }

  type ServiceOrderGetPayload<S extends boolean | null | undefined | ServiceOrderDefaultArgs> = $Result.GetResult<Prisma.$ServiceOrderPayload, S>

  type ServiceOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceOrderCountAggregateInputType | true
    }

  export interface ServiceOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceOrder'], meta: { name: 'ServiceOrder' } }
    /**
     * Find zero or one ServiceOrder that matches the filter.
     * @param {ServiceOrderFindUniqueArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceOrderFindUniqueArgs>(args: SelectSubset<T, ServiceOrderFindUniqueArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceOrderFindUniqueOrThrowArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindFirstArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceOrderFindFirstArgs>(args?: SelectSubset<T, ServiceOrderFindFirstArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindFirstOrThrowArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceOrders
     * const serviceOrders = await prisma.serviceOrder.findMany()
     * 
     * // Get first 10 ServiceOrders
     * const serviceOrders = await prisma.serviceOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceOrderFindManyArgs>(args?: SelectSubset<T, ServiceOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceOrder.
     * @param {ServiceOrderCreateArgs} args - Arguments to create a ServiceOrder.
     * @example
     * // Create one ServiceOrder
     * const ServiceOrder = await prisma.serviceOrder.create({
     *   data: {
     *     // ... data to create a ServiceOrder
     *   }
     * })
     * 
     */
    create<T extends ServiceOrderCreateArgs>(args: SelectSubset<T, ServiceOrderCreateArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceOrders.
     * @param {ServiceOrderCreateManyArgs} args - Arguments to create many ServiceOrders.
     * @example
     * // Create many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceOrderCreateManyArgs>(args?: SelectSubset<T, ServiceOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceOrders and returns the data saved in the database.
     * @param {ServiceOrderCreateManyAndReturnArgs} args - Arguments to create many ServiceOrders.
     * @example
     * // Create many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceOrders and only return the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceOrder.
     * @param {ServiceOrderDeleteArgs} args - Arguments to delete one ServiceOrder.
     * @example
     * // Delete one ServiceOrder
     * const ServiceOrder = await prisma.serviceOrder.delete({
     *   where: {
     *     // ... filter to delete one ServiceOrder
     *   }
     * })
     * 
     */
    delete<T extends ServiceOrderDeleteArgs>(args: SelectSubset<T, ServiceOrderDeleteArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceOrder.
     * @param {ServiceOrderUpdateArgs} args - Arguments to update one ServiceOrder.
     * @example
     * // Update one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceOrderUpdateArgs>(args: SelectSubset<T, ServiceOrderUpdateArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceOrders.
     * @param {ServiceOrderDeleteManyArgs} args - Arguments to filter ServiceOrders to delete.
     * @example
     * // Delete a few ServiceOrders
     * const { count } = await prisma.serviceOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceOrderDeleteManyArgs>(args?: SelectSubset<T, ServiceOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceOrderUpdateManyArgs>(args: SelectSubset<T, ServiceOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrders and returns the data updated in the database.
     * @param {ServiceOrderUpdateManyAndReturnArgs} args - Arguments to update many ServiceOrders.
     * @example
     * // Update many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceOrders and only return the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceOrder.
     * @param {ServiceOrderUpsertArgs} args - Arguments to update or create a ServiceOrder.
     * @example
     * // Update or create a ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.upsert({
     *   create: {
     *     // ... data to create a ServiceOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceOrder we want to update
     *   }
     * })
     */
    upsert<T extends ServiceOrderUpsertArgs>(args: SelectSubset<T, ServiceOrderUpsertArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderCountArgs} args - Arguments to filter ServiceOrders to count.
     * @example
     * // Count the number of ServiceOrders
     * const count = await prisma.serviceOrder.count({
     *   where: {
     *     // ... the filter for the ServiceOrders we want to count
     *   }
     * })
    **/
    count<T extends ServiceOrderCountArgs>(
      args?: Subset<T, ServiceOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceOrderAggregateArgs>(args: Subset<T, ServiceOrderAggregateArgs>): Prisma.PrismaPromise<GetServiceOrderAggregateType<T>>

    /**
     * Group by ServiceOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceOrderGroupByArgs['orderBy'] }
        : { orderBy?: ServiceOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceOrder model
   */
  readonly fields: ServiceOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ServiceOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bill<T extends ServiceOrder$billArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrder$billArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceOrder model
   */
  interface ServiceOrderFieldRefs {
    readonly id: FieldRef<"ServiceOrder", 'Int'>
    readonly description: FieldRef<"ServiceOrder", 'String'>
    readonly status: FieldRef<"ServiceOrder", 'ServiceOrderStatus'>
    readonly estimate: FieldRef<"ServiceOrder", 'Decimal'>
    readonly createdAt: FieldRef<"ServiceOrder", 'DateTime'>
    readonly customerId: FieldRef<"ServiceOrder", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceOrder findUnique
   */
  export type ServiceOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder findUniqueOrThrow
   */
  export type ServiceOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder findFirst
   */
  export type ServiceOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrders.
     */
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder findFirstOrThrow
   */
  export type ServiceOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrders.
     */
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder findMany
   */
  export type ServiceOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrders to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder create
   */
  export type ServiceOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceOrder.
     */
    data: XOR<ServiceOrderCreateInput, ServiceOrderUncheckedCreateInput>
  }

  /**
   * ServiceOrder createMany
   */
  export type ServiceOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceOrders.
     */
    data: ServiceOrderCreateManyInput | ServiceOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceOrder createManyAndReturn
   */
  export type ServiceOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceOrders.
     */
    data: ServiceOrderCreateManyInput | ServiceOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrder update
   */
  export type ServiceOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceOrder.
     */
    data: XOR<ServiceOrderUpdateInput, ServiceOrderUncheckedUpdateInput>
    /**
     * Choose, which ServiceOrder to update.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder updateMany
   */
  export type ServiceOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceOrders.
     */
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrders to update
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to update.
     */
    limit?: number
  }

  /**
   * ServiceOrder updateManyAndReturn
   */
  export type ServiceOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * The data used to update ServiceOrders.
     */
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrders to update
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrder upsert
   */
  export type ServiceOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceOrder to update in case it exists.
     */
    where: ServiceOrderWhereUniqueInput
    /**
     * In case the ServiceOrder found by the `where` argument doesn't exist, create a new ServiceOrder with this data.
     */
    create: XOR<ServiceOrderCreateInput, ServiceOrderUncheckedCreateInput>
    /**
     * In case the ServiceOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceOrderUpdateInput, ServiceOrderUncheckedUpdateInput>
  }

  /**
   * ServiceOrder delete
   */
  export type ServiceOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter which ServiceOrder to delete.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder deleteMany
   */
  export type ServiceOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrders to delete
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to delete.
     */
    limit?: number
  }

  /**
   * ServiceOrder.items
   */
  export type ServiceOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    where?: ServiceOrderItemWhereInput
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    cursor?: ServiceOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrder.bill
   */
  export type ServiceOrder$billArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    where?: BillWhereInput
  }

  /**
   * ServiceOrder without action
   */
  export type ServiceOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
  }


  /**
   * Model ServiceOrderItem
   */

  export type AggregateServiceOrderItem = {
    _count: ServiceOrderItemCountAggregateOutputType | null
    _avg: ServiceOrderItemAvgAggregateOutputType | null
    _sum: ServiceOrderItemSumAggregateOutputType | null
    _min: ServiceOrderItemMinAggregateOutputType | null
    _max: ServiceOrderItemMaxAggregateOutputType | null
  }

  export type ServiceOrderItemAvgAggregateOutputType = {
    id: number | null
    equipmentId: number | null
    serviceOrderId: number | null
  }

  export type ServiceOrderItemSumAggregateOutputType = {
    id: number | null
    equipmentId: number | null
    serviceOrderId: number | null
  }

  export type ServiceOrderItemMinAggregateOutputType = {
    id: number | null
    description: string | null
    status: $Enums.ServiceOrderItemStatus | null
    equipmentId: number | null
    serviceOrderId: number | null
  }

  export type ServiceOrderItemMaxAggregateOutputType = {
    id: number | null
    description: string | null
    status: $Enums.ServiceOrderItemStatus | null
    equipmentId: number | null
    serviceOrderId: number | null
  }

  export type ServiceOrderItemCountAggregateOutputType = {
    id: number
    description: number
    status: number
    equipmentId: number
    serviceOrderId: number
    _all: number
  }


  export type ServiceOrderItemAvgAggregateInputType = {
    id?: true
    equipmentId?: true
    serviceOrderId?: true
  }

  export type ServiceOrderItemSumAggregateInputType = {
    id?: true
    equipmentId?: true
    serviceOrderId?: true
  }

  export type ServiceOrderItemMinAggregateInputType = {
    id?: true
    description?: true
    status?: true
    equipmentId?: true
    serviceOrderId?: true
  }

  export type ServiceOrderItemMaxAggregateInputType = {
    id?: true
    description?: true
    status?: true
    equipmentId?: true
    serviceOrderId?: true
  }

  export type ServiceOrderItemCountAggregateInputType = {
    id?: true
    description?: true
    status?: true
    equipmentId?: true
    serviceOrderId?: true
    _all?: true
  }

  export type ServiceOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrderItem to aggregate.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceOrderItems
    **/
    _count?: true | ServiceOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceOrderItemMaxAggregateInputType
  }

  export type GetServiceOrderItemAggregateType<T extends ServiceOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceOrderItem[P]>
      : GetScalarType<T[P], AggregateServiceOrderItem[P]>
  }




  export type ServiceOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderItemWhereInput
    orderBy?: ServiceOrderItemOrderByWithAggregationInput | ServiceOrderItemOrderByWithAggregationInput[]
    by: ServiceOrderItemScalarFieldEnum[] | ServiceOrderItemScalarFieldEnum
    having?: ServiceOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceOrderItemCountAggregateInputType | true
    _avg?: ServiceOrderItemAvgAggregateInputType
    _sum?: ServiceOrderItemSumAggregateInputType
    _min?: ServiceOrderItemMinAggregateInputType
    _max?: ServiceOrderItemMaxAggregateInputType
  }

  export type ServiceOrderItemGroupByOutputType = {
    id: number
    description: string | null
    status: $Enums.ServiceOrderItemStatus
    equipmentId: number | null
    serviceOrderId: number
    _count: ServiceOrderItemCountAggregateOutputType | null
    _avg: ServiceOrderItemAvgAggregateOutputType | null
    _sum: ServiceOrderItemSumAggregateOutputType | null
    _min: ServiceOrderItemMinAggregateOutputType | null
    _max: ServiceOrderItemMaxAggregateOutputType | null
  }

  type GetServiceOrderItemGroupByPayload<T extends ServiceOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type ServiceOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    status?: boolean
    equipmentId?: boolean
    serviceOrderId?: boolean
    equipment?: boolean | ServiceOrderItem$equipmentArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrderItem"]>

  export type ServiceOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    status?: boolean
    equipmentId?: boolean
    serviceOrderId?: boolean
    equipment?: boolean | ServiceOrderItem$equipmentArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrderItem"]>

  export type ServiceOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    status?: boolean
    equipmentId?: boolean
    serviceOrderId?: boolean
    equipment?: boolean | ServiceOrderItem$equipmentArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrderItem"]>

  export type ServiceOrderItemSelectScalar = {
    id?: boolean
    description?: boolean
    status?: boolean
    equipmentId?: boolean
    serviceOrderId?: boolean
  }

  export type ServiceOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "status" | "equipmentId" | "serviceOrderId", ExtArgs["result"]["serviceOrderItem"]>
  export type ServiceOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | ServiceOrderItem$equipmentArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }
  export type ServiceOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | ServiceOrderItem$equipmentArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }
  export type ServiceOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | ServiceOrderItem$equipmentArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }

  export type $ServiceOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceOrderItem"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs> | null
      serviceOrder: Prisma.$ServiceOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      status: $Enums.ServiceOrderItemStatus
      equipmentId: number | null
      serviceOrderId: number
    }, ExtArgs["result"]["serviceOrderItem"]>
    composites: {}
  }

  type ServiceOrderItemGetPayload<S extends boolean | null | undefined | ServiceOrderItemDefaultArgs> = $Result.GetResult<Prisma.$ServiceOrderItemPayload, S>

  type ServiceOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceOrderItemCountAggregateInputType | true
    }

  export interface ServiceOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceOrderItem'], meta: { name: 'ServiceOrderItem' } }
    /**
     * Find zero or one ServiceOrderItem that matches the filter.
     * @param {ServiceOrderItemFindUniqueArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceOrderItemFindUniqueArgs>(args: SelectSubset<T, ServiceOrderItemFindUniqueArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceOrderItemFindUniqueOrThrowArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemFindFirstArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceOrderItemFindFirstArgs>(args?: SelectSubset<T, ServiceOrderItemFindFirstArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemFindFirstOrThrowArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceOrderItems
     * const serviceOrderItems = await prisma.serviceOrderItem.findMany()
     * 
     * // Get first 10 ServiceOrderItems
     * const serviceOrderItems = await prisma.serviceOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceOrderItemWithIdOnly = await prisma.serviceOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceOrderItemFindManyArgs>(args?: SelectSubset<T, ServiceOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceOrderItem.
     * @param {ServiceOrderItemCreateArgs} args - Arguments to create a ServiceOrderItem.
     * @example
     * // Create one ServiceOrderItem
     * const ServiceOrderItem = await prisma.serviceOrderItem.create({
     *   data: {
     *     // ... data to create a ServiceOrderItem
     *   }
     * })
     * 
     */
    create<T extends ServiceOrderItemCreateArgs>(args: SelectSubset<T, ServiceOrderItemCreateArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceOrderItems.
     * @param {ServiceOrderItemCreateManyArgs} args - Arguments to create many ServiceOrderItems.
     * @example
     * // Create many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceOrderItemCreateManyArgs>(args?: SelectSubset<T, ServiceOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceOrderItems and returns the data saved in the database.
     * @param {ServiceOrderItemCreateManyAndReturnArgs} args - Arguments to create many ServiceOrderItems.
     * @example
     * // Create many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceOrderItems and only return the `id`
     * const serviceOrderItemWithIdOnly = await prisma.serviceOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceOrderItem.
     * @param {ServiceOrderItemDeleteArgs} args - Arguments to delete one ServiceOrderItem.
     * @example
     * // Delete one ServiceOrderItem
     * const ServiceOrderItem = await prisma.serviceOrderItem.delete({
     *   where: {
     *     // ... filter to delete one ServiceOrderItem
     *   }
     * })
     * 
     */
    delete<T extends ServiceOrderItemDeleteArgs>(args: SelectSubset<T, ServiceOrderItemDeleteArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceOrderItem.
     * @param {ServiceOrderItemUpdateArgs} args - Arguments to update one ServiceOrderItem.
     * @example
     * // Update one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceOrderItemUpdateArgs>(args: SelectSubset<T, ServiceOrderItemUpdateArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceOrderItems.
     * @param {ServiceOrderItemDeleteManyArgs} args - Arguments to filter ServiceOrderItems to delete.
     * @example
     * // Delete a few ServiceOrderItems
     * const { count } = await prisma.serviceOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceOrderItemDeleteManyArgs>(args?: SelectSubset<T, ServiceOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceOrderItemUpdateManyArgs>(args: SelectSubset<T, ServiceOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrderItems and returns the data updated in the database.
     * @param {ServiceOrderItemUpdateManyAndReturnArgs} args - Arguments to update many ServiceOrderItems.
     * @example
     * // Update many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceOrderItems and only return the `id`
     * const serviceOrderItemWithIdOnly = await prisma.serviceOrderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceOrderItem.
     * @param {ServiceOrderItemUpsertArgs} args - Arguments to update or create a ServiceOrderItem.
     * @example
     * // Update or create a ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.upsert({
     *   create: {
     *     // ... data to create a ServiceOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends ServiceOrderItemUpsertArgs>(args: SelectSubset<T, ServiceOrderItemUpsertArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemCountArgs} args - Arguments to filter ServiceOrderItems to count.
     * @example
     * // Count the number of ServiceOrderItems
     * const count = await prisma.serviceOrderItem.count({
     *   where: {
     *     // ... the filter for the ServiceOrderItems we want to count
     *   }
     * })
    **/
    count<T extends ServiceOrderItemCountArgs>(
      args?: Subset<T, ServiceOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceOrderItemAggregateArgs>(args: Subset<T, ServiceOrderItemAggregateArgs>): Prisma.PrismaPromise<GetServiceOrderItemAggregateType<T>>

    /**
     * Group by ServiceOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: ServiceOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceOrderItem model
   */
  readonly fields: ServiceOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends ServiceOrderItem$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrderItem$equipmentArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    serviceOrder<T extends ServiceOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrderDefaultArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceOrderItem model
   */
  interface ServiceOrderItemFieldRefs {
    readonly id: FieldRef<"ServiceOrderItem", 'Int'>
    readonly description: FieldRef<"ServiceOrderItem", 'String'>
    readonly status: FieldRef<"ServiceOrderItem", 'ServiceOrderItemStatus'>
    readonly equipmentId: FieldRef<"ServiceOrderItem", 'Int'>
    readonly serviceOrderId: FieldRef<"ServiceOrderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServiceOrderItem findUnique
   */
  export type ServiceOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem findUniqueOrThrow
   */
  export type ServiceOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem findFirst
   */
  export type ServiceOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrderItems.
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrderItems.
     */
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrderItem findFirstOrThrow
   */
  export type ServiceOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrderItems.
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrderItems.
     */
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrderItem findMany
   */
  export type ServiceOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItems to fetch.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceOrderItems.
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrderItem create
   */
  export type ServiceOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceOrderItem.
     */
    data: XOR<ServiceOrderItemCreateInput, ServiceOrderItemUncheckedCreateInput>
  }

  /**
   * ServiceOrderItem createMany
   */
  export type ServiceOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceOrderItems.
     */
    data: ServiceOrderItemCreateManyInput | ServiceOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceOrderItem createManyAndReturn
   */
  export type ServiceOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceOrderItems.
     */
    data: ServiceOrderItemCreateManyInput | ServiceOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrderItem update
   */
  export type ServiceOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceOrderItem.
     */
    data: XOR<ServiceOrderItemUpdateInput, ServiceOrderItemUncheckedUpdateInput>
    /**
     * Choose, which ServiceOrderItem to update.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem updateMany
   */
  export type ServiceOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceOrderItems.
     */
    data: XOR<ServiceOrderItemUpdateManyMutationInput, ServiceOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrderItems to update
     */
    where?: ServiceOrderItemWhereInput
    /**
     * Limit how many ServiceOrderItems to update.
     */
    limit?: number
  }

  /**
   * ServiceOrderItem updateManyAndReturn
   */
  export type ServiceOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update ServiceOrderItems.
     */
    data: XOR<ServiceOrderItemUpdateManyMutationInput, ServiceOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrderItems to update
     */
    where?: ServiceOrderItemWhereInput
    /**
     * Limit how many ServiceOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrderItem upsert
   */
  export type ServiceOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceOrderItem to update in case it exists.
     */
    where: ServiceOrderItemWhereUniqueInput
    /**
     * In case the ServiceOrderItem found by the `where` argument doesn't exist, create a new ServiceOrderItem with this data.
     */
    create: XOR<ServiceOrderItemCreateInput, ServiceOrderItemUncheckedCreateInput>
    /**
     * In case the ServiceOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceOrderItemUpdateInput, ServiceOrderItemUncheckedUpdateInput>
  }

  /**
   * ServiceOrderItem delete
   */
  export type ServiceOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter which ServiceOrderItem to delete.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem deleteMany
   */
  export type ServiceOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrderItems to delete
     */
    where?: ServiceOrderItemWhereInput
    /**
     * Limit how many ServiceOrderItems to delete.
     */
    limit?: number
  }

  /**
   * ServiceOrderItem.equipment
   */
  export type ServiceOrderItem$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * ServiceOrderItem without action
   */
  export type ServiceOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    serviceOrderId: number | null
  }

  export type BillSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    serviceOrderId: number | null
  }

  export type BillMinAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    dueDate: Date | null
    status: $Enums.BillStatus | null
    serviceOrderId: number | null
  }

  export type BillMaxAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    paymentMethod: $Enums.PaymentMethod | null
    dueDate: Date | null
    status: $Enums.BillStatus | null
    serviceOrderId: number | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    amount: number
    paymentMethod: number
    dueDate: number
    status: number
    serviceOrderId: number
    _all: number
  }


  export type BillAvgAggregateInputType = {
    id?: true
    amount?: true
    serviceOrderId?: true
  }

  export type BillSumAggregateInputType = {
    id?: true
    amount?: true
    serviceOrderId?: true
  }

  export type BillMinAggregateInputType = {
    id?: true
    amount?: true
    paymentMethod?: true
    dueDate?: true
    status?: true
    serviceOrderId?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    amount?: true
    paymentMethod?: true
    dueDate?: true
    status?: true
    serviceOrderId?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    amount?: true
    paymentMethod?: true
    dueDate?: true
    status?: true
    serviceOrderId?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _avg?: BillAvgAggregateInputType
    _sum?: BillSumAggregateInputType
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: number
    amount: Decimal
    paymentMethod: $Enums.PaymentMethod
    dueDate: Date
    status: $Enums.BillStatus
    serviceOrderId: number
    _count: BillCountAggregateOutputType | null
    _avg: BillAvgAggregateOutputType | null
    _sum: BillSumAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    status?: boolean
    serviceOrderId?: boolean
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    status?: boolean
    serviceOrderId?: boolean
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    status?: boolean
    serviceOrderId?: boolean
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    amount?: boolean
    paymentMethod?: boolean
    dueDate?: boolean
    status?: boolean
    serviceOrderId?: boolean
  }

  export type BillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "paymentMethod" | "dueDate" | "status" | "serviceOrderId", ExtArgs["result"]["bill"]>
  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }
  export type BillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      serviceOrder: Prisma.$ServiceOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: Prisma.Decimal
      paymentMethod: $Enums.PaymentMethod
      dueDate: Date
      status: $Enums.BillStatus
      serviceOrderId: number
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillUpdateManyAndReturnArgs>(args: SelectSubset<T, BillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceOrder<T extends ServiceOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrderDefaultArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bill model
   */
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'Int'>
    readonly amount: FieldRef<"Bill", 'Decimal'>
    readonly paymentMethod: FieldRef<"Bill", 'PaymentMethod'>
    readonly dueDate: FieldRef<"Bill", 'DateTime'>
    readonly status: FieldRef<"Bill", 'BillStatus'>
    readonly serviceOrderId: FieldRef<"Bill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bill updateManyAndReturn
   */
  export type BillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill
     */
    omit?: BillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    complement: 'complement',
    street: 'street',
    neighborhood: 'neighborhood',
    city: 'city',
    state: 'state',
    customerId: 'customerId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    deviceType: 'deviceType',
    brand: 'brand',
    model: 'model',
    serialNumber: 'serialNumber',
    createdAt: 'createdAt',
    customerId: 'customerId'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const ServiceOrderScalarFieldEnum: {
    id: 'id',
    description: 'description',
    status: 'status',
    estimate: 'estimate',
    createdAt: 'createdAt',
    customerId: 'customerId'
  };

  export type ServiceOrderScalarFieldEnum = (typeof ServiceOrderScalarFieldEnum)[keyof typeof ServiceOrderScalarFieldEnum]


  export const ServiceOrderItemScalarFieldEnum: {
    id: 'id',
    description: 'description',
    status: 'status',
    equipmentId: 'equipmentId',
    serviceOrderId: 'serviceOrderId'
  };

  export type ServiceOrderItemScalarFieldEnum = (typeof ServiceOrderItemScalarFieldEnum)[keyof typeof ServiceOrderItemScalarFieldEnum]


  export const BillScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    dueDate: 'dueDate',
    status: 'status',
    serviceOrderId: 'serviceOrderId'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DeviceType'
   */
  export type EnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType'>
    


  /**
   * Reference to a field of type 'DeviceType[]'
   */
  export type ListEnumDeviceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeviceType[]'>
    


  /**
   * Reference to a field of type 'ServiceOrderStatus'
   */
  export type EnumServiceOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderStatus'>
    


  /**
   * Reference to a field of type 'ServiceOrderStatus[]'
   */
  export type ListEnumServiceOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ServiceOrderItemStatus'
   */
  export type EnumServiceOrderItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderItemStatus'>
    


  /**
   * Reference to a field of type 'ServiceOrderItemStatus[]'
   */
  export type ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderItemStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'BillStatus'
   */
  export type EnumBillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillStatus'>
    


  /**
   * Reference to a field of type 'BillStatus[]'
   */
  export type ListEnumBillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    addresses?: AddressListRelationFilter
    equipment?: EquipmentListRelationFilter
    serviceOrders?: ServiceOrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    equipment?: EquipmentOrderByRelationAggregateInput
    serviceOrders?: ServiceOrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    email?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    addresses?: AddressListRelationFilter
    equipment?: EquipmentListRelationFilter
    serviceOrders?: ServiceOrderListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    complement?: StringNullableFilter<"Address"> | string | null
    street?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    customerId?: IntFilter<"Address"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    complement?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    customerId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    complement?: StringNullableFilter<"Address"> | string | null
    street?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    customerId?: IntFilter<"Address"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    complement?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    neighborhood?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    customerId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    complement?: StringNullableWithAggregatesFilter<"Address"> | string | null
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    neighborhood?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    customerId?: IntWithAggregatesFilter<"Address"> | number
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: IntFilter<"Equipment"> | number
    deviceType?: EnumDeviceTypeFilter<"Equipment"> | $Enums.DeviceType
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    customerId?: IntFilter<"Equipment"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    serviceOrderItems?: ServiceOrderItemListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    deviceType?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    serviceOrderItems?: ServiceOrderItemOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    deviceType?: EnumDeviceTypeFilter<"Equipment"> | $Enums.DeviceType
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    customerId?: IntFilter<"Equipment"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    serviceOrderItems?: ServiceOrderItemListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    deviceType?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipment"> | number
    deviceType?: EnumDeviceTypeWithAggregatesFilter<"Equipment"> | $Enums.DeviceType
    brand?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    model?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    customerId?: IntWithAggregatesFilter<"Equipment"> | number
  }

  export type ServiceOrderWhereInput = {
    AND?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    OR?: ServiceOrderWhereInput[]
    NOT?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    id?: IntFilter<"ServiceOrder"> | number
    description?: StringNullableFilter<"ServiceOrder"> | string | null
    status?: EnumServiceOrderStatusFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
    estimate?: DecimalNullableFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    customerId?: IntFilter<"ServiceOrder"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: ServiceOrderItemListRelationFilter
    bill?: XOR<BillNullableScalarRelationFilter, BillWhereInput> | null
  }

  export type ServiceOrderOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    estimate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    items?: ServiceOrderItemOrderByRelationAggregateInput
    bill?: BillOrderByWithRelationInput
  }

  export type ServiceOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    OR?: ServiceOrderWhereInput[]
    NOT?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    description?: StringNullableFilter<"ServiceOrder"> | string | null
    status?: EnumServiceOrderStatusFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
    estimate?: DecimalNullableFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    customerId?: IntFilter<"ServiceOrder"> | number
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    items?: ServiceOrderItemListRelationFilter
    bill?: XOR<BillNullableScalarRelationFilter, BillWhereInput> | null
  }, "id">

  export type ServiceOrderOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    estimate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
    _count?: ServiceOrderCountOrderByAggregateInput
    _avg?: ServiceOrderAvgOrderByAggregateInput
    _max?: ServiceOrderMaxOrderByAggregateInput
    _min?: ServiceOrderMinOrderByAggregateInput
    _sum?: ServiceOrderSumOrderByAggregateInput
  }

  export type ServiceOrderScalarWhereWithAggregatesInput = {
    AND?: ServiceOrderScalarWhereWithAggregatesInput | ServiceOrderScalarWhereWithAggregatesInput[]
    OR?: ServiceOrderScalarWhereWithAggregatesInput[]
    NOT?: ServiceOrderScalarWhereWithAggregatesInput | ServiceOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceOrder"> | number
    description?: StringNullableWithAggregatesFilter<"ServiceOrder"> | string | null
    status?: EnumServiceOrderStatusWithAggregatesFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
    estimate?: DecimalNullableWithAggregatesFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServiceOrder"> | Date | string
    customerId?: IntWithAggregatesFilter<"ServiceOrder"> | number
  }

  export type ServiceOrderItemWhereInput = {
    AND?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    OR?: ServiceOrderItemWhereInput[]
    NOT?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    id?: IntFilter<"ServiceOrderItem"> | number
    description?: StringNullableFilter<"ServiceOrderItem"> | string | null
    status?: EnumServiceOrderItemStatusFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemStatus
    equipmentId?: IntNullableFilter<"ServiceOrderItem"> | number | null
    serviceOrderId?: IntFilter<"ServiceOrderItem"> | number
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    serviceOrder?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
  }

  export type ServiceOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    equipmentId?: SortOrderInput | SortOrder
    serviceOrderId?: SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    serviceOrder?: ServiceOrderOrderByWithRelationInput
  }

  export type ServiceOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    OR?: ServiceOrderItemWhereInput[]
    NOT?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    description?: StringNullableFilter<"ServiceOrderItem"> | string | null
    status?: EnumServiceOrderItemStatusFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemStatus
    equipmentId?: IntNullableFilter<"ServiceOrderItem"> | number | null
    serviceOrderId?: IntFilter<"ServiceOrderItem"> | number
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    serviceOrder?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
  }, "id">

  export type ServiceOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    equipmentId?: SortOrderInput | SortOrder
    serviceOrderId?: SortOrder
    _count?: ServiceOrderItemCountOrderByAggregateInput
    _avg?: ServiceOrderItemAvgOrderByAggregateInput
    _max?: ServiceOrderItemMaxOrderByAggregateInput
    _min?: ServiceOrderItemMinOrderByAggregateInput
    _sum?: ServiceOrderItemSumOrderByAggregateInput
  }

  export type ServiceOrderItemScalarWhereWithAggregatesInput = {
    AND?: ServiceOrderItemScalarWhereWithAggregatesInput | ServiceOrderItemScalarWhereWithAggregatesInput[]
    OR?: ServiceOrderItemScalarWhereWithAggregatesInput[]
    NOT?: ServiceOrderItemScalarWhereWithAggregatesInput | ServiceOrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceOrderItem"> | number
    description?: StringNullableWithAggregatesFilter<"ServiceOrderItem"> | string | null
    status?: EnumServiceOrderItemStatusWithAggregatesFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemStatus
    equipmentId?: IntNullableWithAggregatesFilter<"ServiceOrderItem"> | number | null
    serviceOrderId?: IntWithAggregatesFilter<"ServiceOrderItem"> | number
  }

  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: IntFilter<"Bill"> | number
    amount?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"Bill"> | $Enums.PaymentMethod
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    status?: EnumBillStatusFilter<"Bill"> | $Enums.BillStatus
    serviceOrderId?: IntFilter<"Bill"> | number
    serviceOrder?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    serviceOrderId?: SortOrder
    serviceOrder?: ServiceOrderOrderByWithRelationInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serviceOrderId?: number
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    amount?: DecimalFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFilter<"Bill"> | $Enums.PaymentMethod
    dueDate?: DateTimeFilter<"Bill"> | Date | string
    status?: EnumBillStatusFilter<"Bill"> | $Enums.BillStatus
    serviceOrder?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
  }, "id" | "serviceOrderId">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    serviceOrderId?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _avg?: BillAvgOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
    _sum?: BillSumOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bill"> | number
    amount?: DecimalWithAggregatesFilter<"Bill"> | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Bill"> | $Enums.PaymentMethod
    dueDate?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    status?: EnumBillStatusWithAggregatesFilter<"Bill"> | $Enums.BillStatus
    serviceOrderId?: IntWithAggregatesFilter<"Bill"> | number
  }

  export type CustomerCreateInput = {
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentCreateNestedManyWithoutCustomerInput
    serviceOrders?: ServiceOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCustomerInput
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUpdateManyWithoutCustomerNestedInput
    serviceOrders?: ServiceOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutCustomerNestedInput
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    complement?: string | null
    street?: string | null
    neighborhood?: string | null
    city?: string | null
    state?: string | null
    customer: CustomerCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    complement?: string | null
    street?: string | null
    neighborhood?: string | null
    city?: string | null
    state?: string | null
    customerId: number
  }

  export type AddressUpdateInput = {
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    complement?: string | null
    street?: string | null
    neighborhood?: string | null
    city?: string | null
    state?: string | null
    customerId: number
  }

  export type AddressUpdateManyMutationInput = {
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipmentCreateInput = {
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutEquipmentInput
    serviceOrderItems?: ServiceOrderItemCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: number
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
    customerId: number
    serviceOrderItems?: ServiceOrderItemUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutEquipmentNestedInput
    serviceOrderItems?: ServiceOrderItemUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    serviceOrderItems?: ServiceOrderItemUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: number
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
    customerId: number
  }

  export type EquipmentUpdateManyMutationInput = {
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceOrderCreateInput = {
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutServiceOrdersInput
    items?: ServiceOrderItemCreateNestedManyWithoutServiceOrderInput
    bill?: BillCreateNestedOneWithoutServiceOrderInput
  }

  export type ServiceOrderUncheckedCreateInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customerId: number
    items?: ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput
    bill?: BillUncheckedCreateNestedOneWithoutServiceOrderInput
  }

  export type ServiceOrderUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutServiceOrdersNestedInput
    items?: ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput
    bill?: BillUpdateOneWithoutServiceOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    items?: ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput
    bill?: BillUncheckedUpdateOneWithoutServiceOrderNestedInput
  }

  export type ServiceOrderCreateManyInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customerId: number
  }

  export type ServiceOrderUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceOrderItemCreateInput = {
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    equipment?: EquipmentCreateNestedOneWithoutServiceOrderItemsInput
    serviceOrder: ServiceOrderCreateNestedOneWithoutItemsInput
  }

  export type ServiceOrderItemUncheckedCreateInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    equipmentId?: number | null
    serviceOrderId: number
  }

  export type ServiceOrderItemUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    equipment?: EquipmentUpdateOneWithoutServiceOrderItemsNestedInput
    serviceOrder?: ServiceOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ServiceOrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    equipmentId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceOrderItemCreateManyInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    equipmentId?: number | null
    serviceOrderId: number
  }

  export type ServiceOrderItemUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
  }

  export type ServiceOrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    equipmentId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type BillCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    dueDate: Date | string
    status?: $Enums.BillStatus
    serviceOrder: ServiceOrderCreateNestedOneWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    dueDate: Date | string
    status?: $Enums.BillStatus
    serviceOrderId: number
  }

  export type BillUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    serviceOrder?: ServiceOrderUpdateOneRequiredWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    serviceOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type BillCreateManyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    dueDate: Date | string
    status?: $Enums.BillStatus
    serviceOrderId: number
  }

  export type BillUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
  }

  export type BillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    serviceOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type ServiceOrderListRelationFilter = {
    every?: ServiceOrderWhereInput
    some?: ServiceOrderWhereInput
    none?: ServiceOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    complement?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    customerId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    complement?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    customerId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    complement?: SortOrder
    street?: SortOrder
    neighborhood?: SortOrder
    city?: SortOrder
    state?: SortOrder
    customerId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type EnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type ServiceOrderItemListRelationFilter = {
    every?: ServiceOrderItemWhereInput
    some?: ServiceOrderItemWhereInput
    none?: ServiceOrderItemWhereInput
  }

  export type ServiceOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    deviceType?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type EnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type EnumServiceOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusFilter<$PrismaModel> | $Enums.ServiceOrderStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BillNullableScalarRelationFilter = {
    is?: BillWhereInput | null
    isNot?: BillWhereInput | null
  }

  export type ServiceOrderCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    estimate?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
  }

  export type ServiceOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    estimate?: SortOrder
    customerId?: SortOrder
  }

  export type ServiceOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    estimate?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
  }

  export type ServiceOrderMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    estimate?: SortOrder
    createdAt?: SortOrder
    customerId?: SortOrder
  }

  export type ServiceOrderSumOrderByAggregateInput = {
    id?: SortOrder
    estimate?: SortOrder
    customerId?: SortOrder
  }

  export type EnumServiceOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumServiceOrderItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemStatus | EnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderItemStatusFilter<$PrismaModel> | $Enums.ServiceOrderItemStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EquipmentNullableScalarRelationFilter = {
    is?: EquipmentWhereInput | null
    isNot?: EquipmentWhereInput | null
  }

  export type ServiceOrderScalarRelationFilter = {
    is?: ServiceOrderWhereInput
    isNot?: ServiceOrderWhereInput
  }

  export type ServiceOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    equipmentId?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type ServiceOrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type ServiceOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    equipmentId?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type ServiceOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    equipmentId?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type ServiceOrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type EnumServiceOrderItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemStatus | EnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderItemStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderItemStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumBillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusFilter<$PrismaModel> | $Enums.BillStatus
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type BillAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type BillSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    serviceOrderId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumBillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillStatusFilter<$PrismaModel>
    _max?: NestedEnumBillStatusFilter<$PrismaModel>
  }

  export type AddressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type ServiceOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceOrderCreateWithoutCustomerInput, ServiceOrderUncheckedCreateWithoutCustomerInput> | ServiceOrderCreateWithoutCustomerInput[] | ServiceOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCustomerInput | ServiceOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceOrderCreateManyCustomerInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type ServiceOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ServiceOrderCreateWithoutCustomerInput, ServiceOrderUncheckedCreateWithoutCustomerInput> | ServiceOrderCreateWithoutCustomerInput[] | ServiceOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCustomerInput | ServiceOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: ServiceOrderCreateManyCustomerInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCustomerInput | EquipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCustomerInput | EquipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCustomerInput | EquipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type ServiceOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutCustomerInput, ServiceOrderUncheckedCreateWithoutCustomerInput> | ServiceOrderCreateWithoutCustomerInput[] | ServiceOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCustomerInput | ServiceOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutCustomerInput | ServiceOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceOrderCreateManyCustomerInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutCustomerInput | ServiceOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutCustomerInput | ServiceOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCustomerInput | EquipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCustomerInput | EquipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCustomerInput | EquipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type ServiceOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutCustomerInput, ServiceOrderUncheckedCreateWithoutCustomerInput> | ServiceOrderCreateWithoutCustomerInput[] | ServiceOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutCustomerInput | ServiceOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutCustomerInput | ServiceOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ServiceOrderCreateManyCustomerInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutCustomerInput | ServiceOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutCustomerInput | ServiceOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutAddressesInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    upsert?: CustomerUpsertWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAddressesInput, CustomerUpdateWithoutAddressesInput>, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type CustomerCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEquipmentInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceOrderItemCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ServiceOrderItemCreateWithoutEquipmentInput, ServiceOrderItemUncheckedCreateWithoutEquipmentInput> | ServiceOrderItemCreateWithoutEquipmentInput[] | ServiceOrderItemUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutEquipmentInput | ServiceOrderItemCreateOrConnectWithoutEquipmentInput[]
    createMany?: ServiceOrderItemCreateManyEquipmentInputEnvelope
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
  }

  export type ServiceOrderItemUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ServiceOrderItemCreateWithoutEquipmentInput, ServiceOrderItemUncheckedCreateWithoutEquipmentInput> | ServiceOrderItemCreateWithoutEquipmentInput[] | ServiceOrderItemUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutEquipmentInput | ServiceOrderItemCreateOrConnectWithoutEquipmentInput[]
    createMany?: ServiceOrderItemCreateManyEquipmentInputEnvelope
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
  }

  export type EnumDeviceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DeviceType
  }

  export type CustomerUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEquipmentInput
    upsert?: CustomerUpsertWithoutEquipmentInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutEquipmentInput, CustomerUpdateWithoutEquipmentInput>, CustomerUncheckedUpdateWithoutEquipmentInput>
  }

  export type ServiceOrderItemUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ServiceOrderItemCreateWithoutEquipmentInput, ServiceOrderItemUncheckedCreateWithoutEquipmentInput> | ServiceOrderItemCreateWithoutEquipmentInput[] | ServiceOrderItemUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutEquipmentInput | ServiceOrderItemCreateOrConnectWithoutEquipmentInput[]
    upsert?: ServiceOrderItemUpsertWithWhereUniqueWithoutEquipmentInput | ServiceOrderItemUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ServiceOrderItemCreateManyEquipmentInputEnvelope
    set?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    disconnect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    delete?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    update?: ServiceOrderItemUpdateWithWhereUniqueWithoutEquipmentInput | ServiceOrderItemUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ServiceOrderItemUpdateManyWithWhereWithoutEquipmentInput | ServiceOrderItemUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
  }

  export type ServiceOrderItemUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ServiceOrderItemCreateWithoutEquipmentInput, ServiceOrderItemUncheckedCreateWithoutEquipmentInput> | ServiceOrderItemCreateWithoutEquipmentInput[] | ServiceOrderItemUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutEquipmentInput | ServiceOrderItemCreateOrConnectWithoutEquipmentInput[]
    upsert?: ServiceOrderItemUpsertWithWhereUniqueWithoutEquipmentInput | ServiceOrderItemUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ServiceOrderItemCreateManyEquipmentInputEnvelope
    set?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    disconnect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    delete?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    update?: ServiceOrderItemUpdateWithWhereUniqueWithoutEquipmentInput | ServiceOrderItemUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ServiceOrderItemUpdateManyWithWhereWithoutEquipmentInput | ServiceOrderItemUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutServiceOrdersInput = {
    create?: XOR<CustomerCreateWithoutServiceOrdersInput, CustomerUncheckedCreateWithoutServiceOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutServiceOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceOrderItemCreateNestedManyWithoutServiceOrderInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
  }

  export type BillCreateNestedOneWithoutServiceOrderInput = {
    create?: XOR<BillCreateWithoutServiceOrderInput, BillUncheckedCreateWithoutServiceOrderInput>
    connectOrCreate?: BillCreateOrConnectWithoutServiceOrderInput
    connect?: BillWhereUniqueInput
  }

  export type ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
  }

  export type BillUncheckedCreateNestedOneWithoutServiceOrderInput = {
    create?: XOR<BillCreateWithoutServiceOrderInput, BillUncheckedCreateWithoutServiceOrderInput>
    connectOrCreate?: BillCreateOrConnectWithoutServiceOrderInput
    connect?: BillWhereUniqueInput
  }

  export type EnumServiceOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceOrderStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CustomerUpdateOneRequiredWithoutServiceOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutServiceOrdersInput, CustomerUncheckedCreateWithoutServiceOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutServiceOrdersInput
    upsert?: CustomerUpsertWithoutServiceOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutServiceOrdersInput, CustomerUpdateWithoutServiceOrdersInput>, CustomerUncheckedUpdateWithoutServiceOrdersInput>
  }

  export type ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    upsert?: ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    set?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    disconnect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    delete?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    update?: ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput[]
    updateMany?: ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput | ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput[]
    deleteMany?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
  }

  export type BillUpdateOneWithoutServiceOrderNestedInput = {
    create?: XOR<BillCreateWithoutServiceOrderInput, BillUncheckedCreateWithoutServiceOrderInput>
    connectOrCreate?: BillCreateOrConnectWithoutServiceOrderInput
    upsert?: BillUpsertWithoutServiceOrderInput
    disconnect?: BillWhereInput | boolean
    delete?: BillWhereInput | boolean
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutServiceOrderInput, BillUpdateWithoutServiceOrderInput>, BillUncheckedUpdateWithoutServiceOrderInput>
  }

  export type ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    upsert?: ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    set?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    disconnect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    delete?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    update?: ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput[]
    updateMany?: ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput | ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput[]
    deleteMany?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
  }

  export type BillUncheckedUpdateOneWithoutServiceOrderNestedInput = {
    create?: XOR<BillCreateWithoutServiceOrderInput, BillUncheckedCreateWithoutServiceOrderInput>
    connectOrCreate?: BillCreateOrConnectWithoutServiceOrderInput
    upsert?: BillUpsertWithoutServiceOrderInput
    disconnect?: BillWhereInput | boolean
    delete?: BillWhereInput | boolean
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutServiceOrderInput, BillUpdateWithoutServiceOrderInput>, BillUncheckedUpdateWithoutServiceOrderInput>
  }

  export type EquipmentCreateNestedOneWithoutServiceOrderItemsInput = {
    create?: XOR<EquipmentCreateWithoutServiceOrderItemsInput, EquipmentUncheckedCreateWithoutServiceOrderItemsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutServiceOrderItemsInput
    connect?: EquipmentWhereUniqueInput
  }

  export type ServiceOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutItemsInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type EnumServiceOrderItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceOrderItemStatus
  }

  export type EquipmentUpdateOneWithoutServiceOrderItemsNestedInput = {
    create?: XOR<EquipmentCreateWithoutServiceOrderItemsInput, EquipmentUncheckedCreateWithoutServiceOrderItemsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutServiceOrderItemsInput
    upsert?: EquipmentUpsertWithoutServiceOrderItemsInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutServiceOrderItemsInput, EquipmentUpdateWithoutServiceOrderItemsInput>, EquipmentUncheckedUpdateWithoutServiceOrderItemsInput>
  }

  export type ServiceOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutItemsInput
    upsert?: ServiceOrderUpsertWithoutItemsInput
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutItemsInput, ServiceOrderUpdateWithoutItemsInput>, ServiceOrderUncheckedUpdateWithoutItemsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceOrderCreateNestedOneWithoutBillInput = {
    create?: XOR<ServiceOrderCreateWithoutBillInput, ServiceOrderUncheckedCreateWithoutBillInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutBillInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumBillStatusFieldUpdateOperationsInput = {
    set?: $Enums.BillStatus
  }

  export type ServiceOrderUpdateOneRequiredWithoutBillNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutBillInput, ServiceOrderUncheckedCreateWithoutBillInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutBillInput
    upsert?: ServiceOrderUpsertWithoutBillInput
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutBillInput, ServiceOrderUpdateWithoutBillInput>, ServiceOrderUncheckedUpdateWithoutBillInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDeviceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeFilter<$PrismaModel> | $Enums.DeviceType
  }

  export type NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeviceType | EnumDeviceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeviceType[] | ListEnumDeviceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDeviceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DeviceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeviceTypeFilter<$PrismaModel>
    _max?: NestedEnumDeviceTypeFilter<$PrismaModel>
  }

  export type NestedEnumServiceOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusFilter<$PrismaModel> | $Enums.ServiceOrderStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumServiceOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumServiceOrderItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemStatus | EnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderItemStatusFilter<$PrismaModel> | $Enums.ServiceOrderItemStatus
  }

  export type NestedEnumServiceOrderItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemStatus | EnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderItemStatus[] | ListEnumServiceOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderItemStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderItemStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumBillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusFilter<$PrismaModel> | $Enums.BillStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumBillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BillStatus[] | ListEnumBillStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBillStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillStatusFilter<$PrismaModel>
    _max?: NestedEnumBillStatusFilter<$PrismaModel>
  }

  export type AddressCreateWithoutCustomerInput = {
    complement?: string | null
    street?: string | null
    neighborhood?: string | null
    city?: string | null
    state?: string | null
  }

  export type AddressUncheckedCreateWithoutCustomerInput = {
    id?: number
    complement?: string | null
    street?: string | null
    neighborhood?: string | null
    city?: string | null
    state?: string | null
  }

  export type AddressCreateOrConnectWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressCreateManyCustomerInputEnvelope = {
    data: AddressCreateManyCustomerInput | AddressCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCreateWithoutCustomerInput = {
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
    serviceOrderItems?: ServiceOrderItemCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutCustomerInput = {
    id?: number
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
    serviceOrderItems?: ServiceOrderItemUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutCustomerInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput>
  }

  export type EquipmentCreateManyCustomerInputEnvelope = {
    data: EquipmentCreateManyCustomerInput | EquipmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ServiceOrderCreateWithoutCustomerInput = {
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    items?: ServiceOrderItemCreateNestedManyWithoutServiceOrderInput
    bill?: BillCreateNestedOneWithoutServiceOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutCustomerInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    items?: ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput
    bill?: BillUncheckedCreateNestedOneWithoutServiceOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutCustomerInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutCustomerInput, ServiceOrderUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceOrderCreateManyCustomerInputEnvelope = {
    data: ServiceOrderCreateManyCustomerInput | ServiceOrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateManyWithWhereWithoutCustomerInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    complement?: StringNullableFilter<"Address"> | string | null
    street?: StringNullableFilter<"Address"> | string | null
    neighborhood?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    customerId?: IntFilter<"Address"> | number
  }

  export type EquipmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutCustomerInput, EquipmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutCustomerInput, EquipmentUncheckedUpdateWithoutCustomerInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutCustomerInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: IntFilter<"Equipment"> | number
    deviceType?: EnumDeviceTypeFilter<"Equipment"> | $Enums.DeviceType
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    customerId?: IntFilter<"Equipment"> | number
  }

  export type ServiceOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ServiceOrderWhereUniqueInput
    update: XOR<ServiceOrderUpdateWithoutCustomerInput, ServiceOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<ServiceOrderCreateWithoutCustomerInput, ServiceOrderUncheckedCreateWithoutCustomerInput>
  }

  export type ServiceOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ServiceOrderWhereUniqueInput
    data: XOR<ServiceOrderUpdateWithoutCustomerInput, ServiceOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type ServiceOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: ServiceOrderScalarWhereInput
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ServiceOrderScalarWhereInput = {
    AND?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
    OR?: ServiceOrderScalarWhereInput[]
    NOT?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
    id?: IntFilter<"ServiceOrder"> | number
    description?: StringNullableFilter<"ServiceOrder"> | string | null
    status?: EnumServiceOrderStatusFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
    estimate?: DecimalNullableFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    customerId?: IntFilter<"ServiceOrder"> | number
  }

  export type CustomerCreateWithoutAddressesInput = {
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    equipment?: EquipmentCreateNestedManyWithoutCustomerInput
    serviceOrders?: ServiceOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCustomerInput
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAddressesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
  }

  export type CustomerUpsertWithoutAddressesInput = {
    update: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAddressesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type CustomerUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateManyWithoutCustomerNestedInput
    serviceOrders?: ServiceOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUncheckedUpdateManyWithoutCustomerNestedInput
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutEquipmentInput = {
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    serviceOrders?: ServiceOrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEquipmentInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    serviceOrders?: ServiceOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEquipmentInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceOrderItemCreateWithoutEquipmentInput = {
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    serviceOrder: ServiceOrderCreateNestedOneWithoutItemsInput
  }

  export type ServiceOrderItemUncheckedCreateWithoutEquipmentInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    serviceOrderId: number
  }

  export type ServiceOrderItemCreateOrConnectWithoutEquipmentInput = {
    where: ServiceOrderItemWhereUniqueInput
    create: XOR<ServiceOrderItemCreateWithoutEquipmentInput, ServiceOrderItemUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceOrderItemCreateManyEquipmentInputEnvelope = {
    data: ServiceOrderItemCreateManyEquipmentInput | ServiceOrderItemCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutEquipmentInput = {
    update: XOR<CustomerUpdateWithoutEquipmentInput, CustomerUncheckedUpdateWithoutEquipmentInput>
    create: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutEquipmentInput, CustomerUncheckedUpdateWithoutEquipmentInput>
  }

  export type CustomerUpdateWithoutEquipmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    serviceOrders?: ServiceOrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    serviceOrders?: ServiceOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ServiceOrderItemUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ServiceOrderItemWhereUniqueInput
    update: XOR<ServiceOrderItemUpdateWithoutEquipmentInput, ServiceOrderItemUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ServiceOrderItemCreateWithoutEquipmentInput, ServiceOrderItemUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceOrderItemUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ServiceOrderItemWhereUniqueInput
    data: XOR<ServiceOrderItemUpdateWithoutEquipmentInput, ServiceOrderItemUncheckedUpdateWithoutEquipmentInput>
  }

  export type ServiceOrderItemUpdateManyWithWhereWithoutEquipmentInput = {
    where: ServiceOrderItemScalarWhereInput
    data: XOR<ServiceOrderItemUpdateManyMutationInput, ServiceOrderItemUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type ServiceOrderItemScalarWhereInput = {
    AND?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
    OR?: ServiceOrderItemScalarWhereInput[]
    NOT?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
    id?: IntFilter<"ServiceOrderItem"> | number
    description?: StringNullableFilter<"ServiceOrderItem"> | string | null
    status?: EnumServiceOrderItemStatusFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemStatus
    equipmentId?: IntNullableFilter<"ServiceOrderItem"> | number | null
    serviceOrderId?: IntFilter<"ServiceOrderItem"> | number
  }

  export type CustomerCreateWithoutServiceOrdersInput = {
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutServiceOrdersInput = {
    id?: number
    name: string
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutServiceOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutServiceOrdersInput, CustomerUncheckedCreateWithoutServiceOrdersInput>
  }

  export type ServiceOrderItemCreateWithoutServiceOrderInput = {
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    equipment?: EquipmentCreateNestedOneWithoutServiceOrderItemsInput
  }

  export type ServiceOrderItemUncheckedCreateWithoutServiceOrderInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    equipmentId?: number | null
  }

  export type ServiceOrderItemCreateOrConnectWithoutServiceOrderInput = {
    where: ServiceOrderItemWhereUniqueInput
    create: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput>
  }

  export type ServiceOrderItemCreateManyServiceOrderInputEnvelope = {
    data: ServiceOrderItemCreateManyServiceOrderInput | ServiceOrderItemCreateManyServiceOrderInput[]
    skipDuplicates?: boolean
  }

  export type BillCreateWithoutServiceOrderInput = {
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    dueDate: Date | string
    status?: $Enums.BillStatus
  }

  export type BillUncheckedCreateWithoutServiceOrderInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    paymentMethod: $Enums.PaymentMethod
    dueDate: Date | string
    status?: $Enums.BillStatus
  }

  export type BillCreateOrConnectWithoutServiceOrderInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutServiceOrderInput, BillUncheckedCreateWithoutServiceOrderInput>
  }

  export type CustomerUpsertWithoutServiceOrdersInput = {
    update: XOR<CustomerUpdateWithoutServiceOrdersInput, CustomerUncheckedUpdateWithoutServiceOrdersInput>
    create: XOR<CustomerCreateWithoutServiceOrdersInput, CustomerUncheckedCreateWithoutServiceOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutServiceOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutServiceOrdersInput, CustomerUncheckedUpdateWithoutServiceOrdersInput>
  }

  export type CustomerUpdateWithoutServiceOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutServiceOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput = {
    where: ServiceOrderItemWhereUniqueInput
    update: XOR<ServiceOrderItemUpdateWithoutServiceOrderInput, ServiceOrderItemUncheckedUpdateWithoutServiceOrderInput>
    create: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput>
  }

  export type ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput = {
    where: ServiceOrderItemWhereUniqueInput
    data: XOR<ServiceOrderItemUpdateWithoutServiceOrderInput, ServiceOrderItemUncheckedUpdateWithoutServiceOrderInput>
  }

  export type ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput = {
    where: ServiceOrderItemScalarWhereInput
    data: XOR<ServiceOrderItemUpdateManyMutationInput, ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderInput>
  }

  export type BillUpsertWithoutServiceOrderInput = {
    update: XOR<BillUpdateWithoutServiceOrderInput, BillUncheckedUpdateWithoutServiceOrderInput>
    create: XOR<BillCreateWithoutServiceOrderInput, BillUncheckedCreateWithoutServiceOrderInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutServiceOrderInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutServiceOrderInput, BillUncheckedUpdateWithoutServiceOrderInput>
  }

  export type BillUpdateWithoutServiceOrderInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
  }

  export type BillUncheckedUpdateWithoutServiceOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
  }

  export type EquipmentCreateWithoutServiceOrderItemsInput = {
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutServiceOrderItemsInput = {
    id?: number
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
    customerId: number
  }

  export type EquipmentCreateOrConnectWithoutServiceOrderItemsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutServiceOrderItemsInput, EquipmentUncheckedCreateWithoutServiceOrderItemsInput>
  }

  export type ServiceOrderCreateWithoutItemsInput = {
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutServiceOrdersInput
    bill?: BillCreateNestedOneWithoutServiceOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutItemsInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customerId: number
    bill?: BillUncheckedCreateNestedOneWithoutServiceOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutItemsInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
  }

  export type EquipmentUpsertWithoutServiceOrderItemsInput = {
    update: XOR<EquipmentUpdateWithoutServiceOrderItemsInput, EquipmentUncheckedUpdateWithoutServiceOrderItemsInput>
    create: XOR<EquipmentCreateWithoutServiceOrderItemsInput, EquipmentUncheckedCreateWithoutServiceOrderItemsInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutServiceOrderItemsInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutServiceOrderItemsInput, EquipmentUncheckedUpdateWithoutServiceOrderItemsInput>
  }

  export type EquipmentUpdateWithoutServiceOrderItemsInput = {
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutServiceOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceOrderUpsertWithoutItemsInput = {
    update: XOR<ServiceOrderUpdateWithoutItemsInput, ServiceOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
    where?: ServiceOrderWhereInput
  }

  export type ServiceOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: ServiceOrderWhereInput
    data: XOR<ServiceOrderUpdateWithoutItemsInput, ServiceOrderUncheckedUpdateWithoutItemsInput>
  }

  export type ServiceOrderUpdateWithoutItemsInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutServiceOrdersNestedInput
    bill?: BillUpdateOneWithoutServiceOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    bill?: BillUncheckedUpdateOneWithoutServiceOrderNestedInput
  }

  export type ServiceOrderCreateWithoutBillInput = {
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutServiceOrdersInput
    items?: ServiceOrderItemCreateNestedManyWithoutServiceOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutBillInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    customerId: number
    items?: ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutBillInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutBillInput, ServiceOrderUncheckedCreateWithoutBillInput>
  }

  export type ServiceOrderUpsertWithoutBillInput = {
    update: XOR<ServiceOrderUpdateWithoutBillInput, ServiceOrderUncheckedUpdateWithoutBillInput>
    create: XOR<ServiceOrderCreateWithoutBillInput, ServiceOrderUncheckedCreateWithoutBillInput>
    where?: ServiceOrderWhereInput
  }

  export type ServiceOrderUpdateToOneWithWhereWithoutBillInput = {
    where?: ServiceOrderWhereInput
    data: XOR<ServiceOrderUpdateWithoutBillInput, ServiceOrderUncheckedUpdateWithoutBillInput>
  }

  export type ServiceOrderUpdateWithoutBillInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutServiceOrdersNestedInput
    items?: ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutBillInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: IntFieldUpdateOperationsInput | number
    items?: ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput
  }

  export type AddressCreateManyCustomerInput = {
    id?: number
    complement?: string | null
    street?: string | null
    neighborhood?: string | null
    city?: string | null
    state?: string | null
  }

  export type EquipmentCreateManyCustomerInput = {
    id?: number
    deviceType: $Enums.DeviceType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    createdAt?: Date | string
  }

  export type ServiceOrderCreateManyCustomerInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderStatus
    estimate?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type AddressUpdateWithoutCustomerInput = {
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    neighborhood?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUpdateWithoutCustomerInput = {
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrderItems?: ServiceOrderItemUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceOrderItems?: ServiceOrderItemUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    deviceType?: EnumDeviceTypeFieldUpdateOperationsInput | $Enums.DeviceType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceOrderUpdateWithoutCustomerInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput
    bill?: BillUpdateOneWithoutServiceOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput
    bill?: BillUncheckedUpdateOneWithoutServiceOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    estimate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceOrderItemCreateManyEquipmentInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    serviceOrderId: number
  }

  export type ServiceOrderItemUpdateWithoutEquipmentInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    serviceOrder?: ServiceOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ServiceOrderItemUncheckedUpdateWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    serviceOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceOrderItemUncheckedUpdateManyWithoutEquipmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    serviceOrderId?: IntFieldUpdateOperationsInput | number
  }

  export type ServiceOrderItemCreateManyServiceOrderInput = {
    id?: number
    description?: string | null
    status?: $Enums.ServiceOrderItemStatus
    equipmentId?: number | null
  }

  export type ServiceOrderItemUpdateWithoutServiceOrderInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    equipment?: EquipmentUpdateOneWithoutServiceOrderItemsNestedInput
  }

  export type ServiceOrderItemUncheckedUpdateWithoutServiceOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    equipmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumServiceOrderItemStatusFieldUpdateOperationsInput | $Enums.ServiceOrderItemStatus
    equipmentId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}