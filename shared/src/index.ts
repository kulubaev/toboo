/**
 * What it does.
 *
 * @param name - Parameter description.
 * @returns Type and description of the returned object.
 *
 * @example
 * ```
 * Write me later.
 * ```
 */

export {
  ApiErrors,
  DomainError,
  HttpError,
  UseCaseError,
  RedisErrors,
  SessionErrors,
  DomainErrors,
  ISerializeError,
} from "./error";
/**
 *
 */

export {
  Entity,
  ValueObject,
  Identifier,
  UniqueId,
  AggregateRoot,
  Dispatcher,
  IDomainEvent,
  IHandler,
} from "./domain";

/**
 *
 */
export {
  JWToken,
  JWTClaims,
  RefreshToken,
  Session,
  pgp,
  pgdb,
  db,
} from "./infra";
/**
 */
export { Result, Guard, Either, KeyValuePairs, nil, left, right } from "./core";
/**
 */
export { Controller, UseCase, Middleware, app } from "./api";

/**
 *
 */
export { Mapper, MapResult } from "./mapper";
/**
 *
 */
export { TextUtils, FormDataParser, sqfle } from "./utils";
