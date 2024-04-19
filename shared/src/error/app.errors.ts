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

import { HttpError, ISerializeError } from "./base";

/**
 *
 *
 */
export namespace AppErrors {
  /**
   *
   */
  export class UnexpectedHalt extends HttpError {
    /*
     */
    statusCode = 500;
    /*
     */

    constructor() {
      super("Encountered unexpected halt");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: "Encountered unexpected halt" };
    }
  }
}
