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

import { InfraError, ISerializeError } from "./base";

/**
 *
 *
 */
export namespace SessionErrors {
  /**
   *
   */
  export class CannotConnect extends InfraError {
    /*
     */
    reason = "Cannot connect to session store";
    /*
     */

    constructor(reason?: string) {
      super("Cannot connect to session store");

      if (reason) {
        /**
         */
        this.reason = reason;
      }
    }

    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: "Cannot connect to redis instance" };
    }
  }
  /**
   *
   */
  export class NoSessionFound extends InfraError {
    /*
     */
    reason: string = "No session found for given token";
    /*
     */

    constructor(
      private readonly token: string,
      reason?: string,
    ) {
      super("No session found for given token");

      if (reason) {
        /**
         *
         */
        this.reason = reason;
      }
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: `No session found for given token ${this.token}` };
    }
  }

  /**
   *
   */
  export class CannotRetrieveSessionEntry extends InfraError {
    /*
     */
    reason = "Cannot retrieve session entry";
    /*
     */

    constructor(
      private key: string,
      reason?: string,
    ) {
      super("Cannot retrieve session entry");

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

      return {
        message: `Cannot retrieve session entry for given key ${this.key}`,
      };
    }
  }

  /**
   *
   */
  export class CannotRetrievSessionEntries extends InfraError {
    /*
     */
    reason = "Cannot retrieve session entries";
    /*
     */

    constructor(reason?: string) {
      super("Cannot retrieve session entries");

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

      return { message: "Cannot retrieve session entries" };
    }
  }
  /**
   *
   */
  export class CannotClearSessionEntries extends InfraError {
    /*
     */
    reason = "Cannot clear session entries for given key";
    /*
     */

    constructor(
      private readonly id: string,
      reason?: string,
    ) {
      super("Cannot clear session entries for given key");

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

      return { message: `Cannot clear session entries for given ${this.id}` };
    }
  }

  /**
   *
   */
  export class UnexpectedHalt extends InfraError {
    /**
     *
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
