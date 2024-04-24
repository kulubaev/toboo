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

    constructor(readonly reason: string) {
      super("Encountered unexpected halt");

      if (reason) {
        this.reason = reason;
      }
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
