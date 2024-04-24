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

import { createClient } from "redis";

import { Either } from "../../../core";
import { RedisErrors } from "../../../error";

/**
 *
 */
export type RedisResult<T> = Either<
  | RedisErrors.CannotConnect
  | RedisErrors.EntryRetrievalFailed
  | RedisErrors.UnexpectedHalt,
  T | void
>;
/**
 *
 */
export type RedisClientType = ReturnType<typeof createClient>;

/**
 *
 */
export { RedisClient } from "./client";
