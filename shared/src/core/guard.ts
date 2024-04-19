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
import { Result } from "./result";
//
export interface IGuardResult {
  successful: boolean;
  message?: string;
}

/**
 *
 */
export interface IGuardArgument {
  value: any;
  name: string;
}

/**
 *
 */
export type GuardArgumentCollection = IGuardArgument[];

/**
 *
 */
export class Guard {
  /**
   *
   */

  public static NullOrUndefined(arg: any, name: string): Result<IGuardResult> {
    /**
     */
    if (arg === null || arg === undefined) {
      /**
       *
       */
      return Result.fail(`${name} is null or undefined`);
    }

    return Result.ok();
  }

  /**
   *
   */

  public static Numeric(arg: any, name: string): Result<IGuardResult> {
    /**
     *
     */

    if (Number.isInteger(arg)) {
      /**
       */
      return Result.ok();
    }

    if (!Number.isNaN(Number.parseInt(arg))) {
      /**
       */
      return Result.ok();
    }

    return Result.fail(
      /**
       */
      `${name} is non numeric value, can not be parsed`,
    );
  }
}
