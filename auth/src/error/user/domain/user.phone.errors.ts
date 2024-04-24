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
export namespace UserPhoneErrors {
  /**
   *
   */
  export class UserPhoneCreationFailed extends DomainError {
    /*
     */

    constructor(
      readonly phone: string,
      reason: string | void,
    ) {
      super(reason, "User phone cannot be created");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User phone can not be created for value ${this.phone}`,
      };
    }
  }
}
