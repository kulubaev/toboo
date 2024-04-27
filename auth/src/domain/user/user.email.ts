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
  Guard,
  ValueObject,
  DomainErrors,
  left,
  right,
  nil,
} from "@toboo/shared";
import { UserEmailResult } from ".";
import { UserEmailErrors } from "../../error";
/**
 *
 */

export interface EmailProps {
  value: string;
}

export class UserEmail extends ValueObject<EmailProps> {
  /**
   */
  private static isValid(email: string): boolean {
    /**
     */
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  /**
   * Comment.
   */
  private static format(email: string): string {
    /**
     */
    return email.trim().toLowerCase();
  }

  /**
   *
   */
  constructor(value: string) {
    super({ value });
  }

  /**
   */

  get value(): string {
    return this.props.value;
  }

  /**
   */
  public static create(value: string): UserEmailResult {
    try {
      /**
       */
      const guard = Guard.NullOrUndefined(value, "UserEmail:create:value");

      /**
       */
      if (guard.isFailure) {
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserEmail",
            guard.error?.message,
          ),
        );
      }

      /**
       */
      if (!UserEmail.isValid(UserEmail.format(value))) {
        /**
         */
        return left(new UserEmailErrors.UserEmailFormatNotCorrect(value, nil));
      }

      /**
       */
      return right(new UserEmail(UserEmail.format(value)));
    } catch (error: any) {
      /**
       *
       */
      return left(new UserEmailErrors.UserEmailCreationFailed(value));
    }
  }
}
