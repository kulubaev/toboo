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

/**
 *
 *
 */
export namespace GetUserErrors {
  /**
   *
   */
  export class UserCanNotBeRetrieved extends UseCaseError {
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
  export class UserRetrievalFailed extends UseCaseError {
    /**
     */
    constructor(
      readonly parameter: string,
      message: string,
    ) {
      super(parameter, message);
    }
  }
}
