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
export namespace ApiErrors {
  /**
   *
   */
  export class BadRequest extends HttpError {
    /*
     */
    statusCode = 400;
    /*
     */

    constructor(readonly reason: string = "Malformed request") {
      super("Malformed request");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: "Malformed request" };
    }
  }
  /**
   *
   */
  export class NotAuthenticated extends HttpError {
    /*
     */
    statusCode = 401;
    /*
     */

    constructor(readonly reason: string = "Not authenticated") {
      super("Not authenticated");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: "Not authenticated" };
    }
  }
  /**
   *
   */
  export class NotAuthorized extends HttpError {
    /*
     */
    statusCode = 403;
    /*
     */

    constructor(readonly reason: string = "Not authorized") {
      super("Not autorized");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: "Not authorized" };
    }
  }
  /**
   *
   */
  export class NotFound extends HttpError {
    /*
     */
    statusCode = 404;
    /*
     */

    constructor(readonly reason: string = "Resource not found") {
      super("Resource not found");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: "Resource not found" };
    }
  }
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
