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

import { UseCaseError } from "@toboo/shared";
export { GetUserErrors } from "./user.errors";

/**
 *
 *
 */
export namespace UseCaseErrors {
  /**
   *
   */
  export class NotFound extends UseCaseError {
    /**
     */
    constructor(
      readonly parameter: string,
      message: string,
    ) {
      super(parameter, message);
    }
  }
  /**
   *
   */

  export class RequiredFieldError extends UseCaseError {
    /**
     *
     */

    constructor(
      parameter: string,
      message: string = "Required field is not provided.",
    ) {
      super(parameter, message);
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

  export class InvalidDataError extends UseCaseError {
    /**
     *
     */

    constructor(
      parameter: string,
      message: string = "Invalid data for field is provided.",
    ) {
      super(parameter, message);
    }
  }
}
