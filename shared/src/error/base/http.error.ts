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

import { ISerializeError } from ".";
/**
 */

export abstract class HttpError extends Error {
  /**
   *
   */

  abstract statusCode: number;

  /**
   *
   */

  constructor(public message: string) {
    super(message);
  }

  /**
   *
   */

  abstract serialize(): ISerializeError;
}
