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
import { UserId } from "../../domain";

/**
 *
 *
 */
export namespace UserIdErrors {
  /**
   *
   */
  export class UserIdLookupFailed extends DomainError {
    /*
     */

    constructor(
      readonly id: UserId,
      reason: string | void,
      message?: string,
    ) {
      super(reason, message || "User id lookup failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User id with ${this.id} can not be looked up. Something went awry`,
      };
    }
  }

  /**
   *
   */
  export class UserIdCreationFailed extends DomainError {
    /*
     */

    constructor(
      readonly id: string,
      reason: string | void,
      message?: string,
    ) {
      super(reason, message || "User Id cannot be created");
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
