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

import { Result, ValueObject } from "@toboo/shared";
/**
 *
 */

export interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  /**
   * Comment.
   */
  private static isValid(email: string): boolean {
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
  }

  /**
   * Comment.
   */
  private static format(email: string): string {
    return email.trim().toLowerCase();
  }

  /**
   *
   */
  constructor(props: EmailProps) {
    super(props);
  }

  /**
   * Comment.
   */

  get value(): string {
    return this.props.value;
  }

  /**
   * name
   */
  public static create(value: string): Result<Email> {
    /**
     * Comment.
     */
    if (!Email.isValid(value)) {
      return Result.fail<Email>("Email address is not valid");
    }

    return Result.ok<Email>(new Email({ value: Email.format(value) }));
  }
}

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

export class UserEmail extends Email {}
