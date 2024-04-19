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

    constructor() {
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

    constructor() {
      super("Not autthenticated");
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

    constructor() {
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

    constructor() {
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
}
