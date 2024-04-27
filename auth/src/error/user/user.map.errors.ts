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
export namespace UserMapErrors {
  /**
   *
   */
  export class UserMapFailed extends DomainError {
    /*
     */

    constructor(reason: string | void, message?: string) {
      super(reason, message || "User Map failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message:
          "UserMap has failed, please ensure the validity of parameters being mapped",
      };
    }
  }
}
