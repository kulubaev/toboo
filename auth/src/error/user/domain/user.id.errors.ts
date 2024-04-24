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

import { DomainError, ISerializeError } from "@toboo/shared";

/**
 *
 *
 */
export namespace UserIdErrors {
  /**
   *
   */
  export class UserIdCreationFailed extends DomainError {
    /*
     */
    reason = this.serialize()?.message;
    /*
     */

    constructor(
      readonly id: string,
      reason: string | void,
    ) {
      super(reason, "User Id cannot be created");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User Id can not be created for value ${this.id}`,
      };
    }
  }
}
