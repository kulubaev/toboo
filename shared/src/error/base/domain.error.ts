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

export abstract class DomainError extends Error {
  /**
   *
   */
  reason: string = this.serialize().message;

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
