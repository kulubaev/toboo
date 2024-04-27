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
export namespace UserSecretErrors {
  /**
   *
   */
  export class UserSecretCreationFailed extends DomainError {
    /**
     */

    constructor(reason: string | void, message?: string) {
      super(reason, message || "User Secret cannot be created");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: "User Secret can not be created",
      };
    }
  }
  /**
   *
   */
  export class UserSecretHashingFailed extends DomainError {
    /**
     */

    constructor(reason: string | void) {
      super(reason, "User Secret can not be hashed ");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User Secret can not be created`,
      };
    }
  }
  /**
   *
   */
  export class UserSecretHasInvalidLength extends DomainError {
    /**
     */

    constructor(
      private readonly min: number,
      private readonly max: number,
      reason: string | void,
    ) {
      super(reason, "User Secret has invalid length. ");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User Secret has invalid length. Required length is [ ${this.min}:${this.max} ] characters`,
      };
    }
  }
}
