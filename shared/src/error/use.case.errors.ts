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

import { UseCaseError, ISerializeError } from "./base";

export namespace UseCaseErrors {
  /**
   *
   */

  export class UnexpectedError extends UseCaseError {
    /**
     *
     */

    constructor() {
      super("An Unexpected Error occured");
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
      message: string = "Required field is not provided.",
      parameter?: string,
    ) {
      super(message, parameter);
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Required field ${this.parameter} is not provided. Please make sure its presence`,
      };
    }
  }

  /**
   *
   */
  export class InvalidDataError extends UseCaseError {
    /**
     *
     */

    constructor(
      message: string = "Invalid data provided for the field.",
      parameter: string,
    ) {
      super(message, parameter);
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Invalid data provided for the field ${this.parameter}. Please makes sure its validity`,
      };
    }
  }
}
