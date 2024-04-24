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

import { Either, Guard, DomainErrors } from "..";

/**
 *
 */

export abstract class Mapper {}

/**
 *
 */
export type MapResult<T> = Either<DomainErrors.RequiredParameterNotPresent, T>;
