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

import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";
import {
  Result,
  Guard,
  ValueObject,
  DomainErrors,
  left,
  right,
  nil,
} from "@toboo/shared";
import { UserSecretResult } from ".";
import { UserSecretErrors } from "../../error/user";

/**
 */
const scryptAsync = promisify(scrypt);
/**
 *
 */

export interface IUserSecretProps {
  value: string;
  hashed: boolean;
}

/**
 *
 */
export class UserSecret extends ValueObject<IUserSecretProps> {
  /**
   */

  private static minLength = 6;
  private static maxLength = 20;

  /**
   */

  private static hasValidLength(value: string): boolean {
    /**
     */
    return (
      value.length >= UserSecret.minLength &&
      value.length <= UserSecret.maxLength
    );
  }

  /**
   */

  private static async hash(value: string): Promise<string> {
    /**
     */
    const salt = randomBytes(8).toString("hex");
    const buffer = (await scryptAsync(value, salt, 64)) as Buffer;

    return `${buffer.toString("hex")}.${salt}`;
  }

  /**
   */

  get value(): string {
    return this.props.value;
  }
  /**
   */

  get hashed(): boolean {
    return this.props.hashed;
  }

  /**
   */

  constructor(props: IUserSecretProps) {
    super(props);
  }

  /**
   */

  public async compare(secret: string): Promise<boolean> {
    /**
     */
    const [hashedPassword, salt] = this.value.split(".");
    const buffer = (await scryptAsync(secret, salt, 64)) as Buffer;

    return buffer.toString("hex") === hashedPassword;
  }

  /**
   */

  public static async create(
    value: string,
    hashed: boolean,
  ): Promise<UserSecretResult> {
    try {
      /**
       */
      let guard = Guard.NullOrUndefined(value, "UserSecret:create:value");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "secret",
            guard.error?.message,
          ),
        );
      }
      /**
       */
      guard = Guard.NullOrUndefined(value, "UserSecret:create:hashed");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "hashed",
            guard.error?.message,
          ),
        );
      }

      if (!hashed) {
        /**
         */
        if (!UserSecret.hasValidLength(value)) {
          /**
           */
          return left(
            new UserSecretErrors.UserSecretHasInvalidLength(
              UserSecret.minLength,
              UserSecret.maxLength,
              nil,
            ),
          );
        }

        try {
          value = await UserSecret.hash(value);
        } catch (error: any) {
          /**
           */
          return left(
            new UserSecretErrors.UserSecretHashingFailed(error?.message),
          );
        }
        hashed = true;
      }

      return right(new UserSecret({ value, hashed }));
    } catch (error: any) {
      /**
       */
      return left(
        new UserSecretErrors.UserSecretCreationFailed(error?.message),
      );
    }
  }
}
