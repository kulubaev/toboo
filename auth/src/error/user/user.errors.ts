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
import { UserId, UserEmail } from "../../domain";

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
      super(reason, "User not found");
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
  /**
   *
   */
  export class UserHydrateFailed extends DomainError {
    /*
     */

    constructor(
      readonly id: string,
      reason: string | void,
      message?: string,
    ) {
      super(reason, message || "User hydrate failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User with id ${this.id} can not be hydrated`,
      };
    }
  }

  /**
   *
   */
  export class UserPersistFailed extends DomainError {
    /*
     */

    constructor(
      readonly id: string,
      reason: string | void,
      message?: string,
    ) {
      super(reason, message || "User aggregateroot persistence failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User aggregate root with id ${this.id} can not be persisted`,
      };
    }
  }

  /**
   *
   */
  export class UserCreationFailed extends DomainError {
    /*
     */

    constructor(reason: string | void, message?: string) {
      super(reason, message || "User creation failed");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User can not be created. System error, please try later`,
      };
    }
  }
}
