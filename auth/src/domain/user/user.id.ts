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

import {
  ValueObject,
  UniqueId,
  Guard,
  DomainErrors,
  left,
  right,
} from "@toboo/shared";

import { UserIdErrors } from "../../error";
import { UserIdResult } from ".";

/**
 *
 */

export interface UserIdProps {
  value: UniqueId;
}

/**
 *
 */

/**
 *
 */
export class UserId extends ValueObject<UserIdProps> {
  /**
   *
   */
  public get value(): UniqueId {
    return this.props.value;
  }
  /**
   *
   */
  private constructor(value: UniqueId) {
    super({ value });
  }
  /**
   */
  public static create(value: string | UniqueId): UserIdResult {
    try {
      /**
       */
      const guard = Guard.NullOrUndefined(value, "UserId:create:value");

      /**
       */
      if (guard.isFailure) {
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserId",
            guard.error?.message,
          ),
        );
      }

      /**
       */

      if (value instanceof UniqueId) {
        /**
         */
        return right(new UserId(value));
      }

      return right(new UserId(new UniqueId(value)));
    } catch (error: any) {
      /**
       *
       */

      if (value instanceof UniqueId) {
        return left(new UserIdErrors.UserIdCreationFailed(value.toString()));
      }

      return left(new UserIdErrors.UserIdCreationFailed(value));
    }
  }
}
