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
  left,
  right,
  DomainErrors,
} from "@toboo/shared";

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
   * Comment.
   */
  public get value(): string {
    return this.props.value;
  }
  /**
   *
   */
  private constructor(value: string) {
    super({ value });
  }
  /**
   * Comment.
   */
  public static create(value: string): UserIdResult {
    try {
      /**
       * Comment.
       */
      let guardResult = Guard.NullOrUndefined(value, "UserId:create:value");

      /**
       * Comment.
       */
      if (guardResult.isFailure) {
        return left(new UserIdErrors.UserIdValueNotPresent());
      }

      /**
       * Comment.
       */
      return right(new UserId(new UniqueId(value)));
    } catch (error: any) {
      /**
       *
       */
      return left(new UserIdErrors.UserIdCreationFailed(value));
    }
  }
}
