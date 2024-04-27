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

import { UseCaseError, ISerializeError } from "@toboo/shared";

/**
 *
 *
 */
export namespace GetUserErrors {
  /**
   *
   */
  export class UserCanNotBeFound extends UseCaseError {
    /**
     */
    constructor(
      readonly parameter: string,
      message: string,
    ) {
      super(parameter, message);
    }

    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User with id ${this.parameter} can not be found`,
      };
    }
  }

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

    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `User with id ${this.parameter} can not be found`,
      };
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
