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
import { UserId } from "../../../domain";

/**
 *
 *
 */
export namespace UserErrors {
  /**
   *
   */
  export class UserNotFound extends DomainError {
    /*
     */

    constructor(
      private readonly id: UserId,
      reason: string | void,
    ) {
      super(reason, "User Map failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User  with id ${this.id?.value?.toString()} not found`,
      };
    }
  }
  /**
   *
   */
  export class UserRetrievalFailed extends DomainError {
    /*
     */

    constructor(
      private readonly id: UserId,
      reason: string | void,
    ) {
      super(reason, "User retrieval failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User with id ${this.id?.value?.toString()} can not be retrieved`,
      };
    }
  }
  /**
   *
   */
  export class UsersRetrievalFailed extends DomainError {
    /*
     */

    constructor(reason: string | void) {
      super(reason, "Users retrieval failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Users can not be retrieved`,
      };
    }
  }
}
