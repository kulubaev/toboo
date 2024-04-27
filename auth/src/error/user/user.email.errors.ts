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
import { UserEmail } from "../../domain";

/**
 *
 *
 */
export namespace UserEmailErrors {
  /**
   *
   */
  export class UserEmailAlreadyRegistered extends DomainError {
    /*
     */

    constructor(
      private readonly email: UserEmail,
      reason: string | void,
    ) {
      super(reason, "User email already registered");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User email ${this.email?.value} is already registered. Please ensure to enter unqiue value`,
      };
    }
  }

  /**
   *
   */
  export class UserEmailLookupFailed extends DomainError {
    /*
     */

    constructor(
      readonly email: UserEmail,
      reason: string | void,
      message?: string,
    ) {
      super(reason, message || "User email lookup failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User email with ${this.email.value} can not be looked up. Something went awry`,
      };
    }
  }

  /**
   *
   */
  export class UserEmailCreationFailed extends DomainError {
    /*
     */

    constructor(
      readonly email: string,
      reason: string | void,
      message?: string,
    ) {
      super(reason, message || "User email cannot be created");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User email can not be created for the value ${this.email}`,
      };
    }
  }
  /**
   *
   */
  export class UserEmailFormatNotCorrect extends DomainError {
    /*
     */

    constructor(
      readonly email: string,
      reason: string | void,
    ) {
      super(reason, "User email format is incorrect");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User email value ${this.email} is incorrect. Please ensure its validity`,
      };
    }
  }
}
