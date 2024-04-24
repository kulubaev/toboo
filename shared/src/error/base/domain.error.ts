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

  constructor(
    public readonly reason: string | void,
    public message: string,
  ) {
    super(message);

    this.reason = this.reason || this.serialize().message;
  }

  /**
   *
   */

  abstract serialize(): ISerializeError;
}
