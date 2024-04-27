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

import { UseCaseError, ISerializeError, nil } from "@toboo/shared";

/**
 *
 *
 */
export namespace CreateUserErrors {
  /**
   *
   */
  export class UserEmailAlreadyRegistered extends UseCaseError {
    /**
     */
    constructor(
      readonly parameter: string,
      message?: string,
    ) {
      super(
        parameter,
        message || `User with an email ${parameter} is already registered.`,
      );
    }
  }

  /**
   *
   */
  export class UserCreationFailed extends UseCaseError {
    /**
     */
    constructor(message?: string) {
      super(
        message ||
          " Something went awry. Registration failed. Please try again.",
      );
    }
  }
}
