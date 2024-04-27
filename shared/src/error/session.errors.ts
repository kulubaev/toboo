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

import { JWTClaims } from "../infra";
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

    constructor(
      readonly reason: string | void,
      message?: string,
    ) {
      super(reason, message || "Cannot connect to session store");
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

    constructor(
      private readonly key: string,
      readonly reason: string | void,
      message?: string,
    ) {
      super(reason, message || "No session found for given key");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: `No session found for given key ${this.key}` };
    }
  }

  /**
   *
   */
  export class CannotRetrieveSessionEntry extends InfraError {
    /*
     */

    constructor(
      private key: string,
      readonly reason: string | void,
      message?: string,
    ) {
      super(
        reason,
        message || "Cannot retrieve session entry for the given key",
      );
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

    constructor(
      private readonly key: string,
      readonly reason: string | void,
      message?: string,
    ) {
      super(reason, message || "Cannot retrieve session entries");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: `Cannot retrieve session entries for key ${this.key}` };
    }
  }
  /**
   *
   */
  export class CannotClearSessionEntries extends InfraError {
    /*
     */

    constructor(
      private readonly id: string,
      readonly reason: string | void,
      message?: string,
    ) {
      super(reason, message || "Cannot clear session entries for given key");

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
  /**
   *
   */
  export class CannotIssueRefreshToken extends InfraError {
    /*
     */

    constructor(
      private readonly id: string,
      readonly reason: string | void,
      message?: string,
    ) {
      super(reason, message || "Cannot issue refresh token for the session");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Cannot issue refresh token  for the key ${this.id} `,
      };
    }
  }
  /**
   *
   */
  export class CannotClearSessionToken extends InfraError {
    /*
     */

    constructor(
      readonly session: string,
      readonly reason: string | void,
      message?: string,
    ) {
      super(reason, message || "Cannot remove account token for the session");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Cannot remove account token  for the active session ${this.session}`,
      };
    }
  }

  /**
   *
   */
  export class CannotSignSessionToken extends InfraError {
    /*
     */

    constructor(
      private claims: JWTClaims,
      readonly session: string,
      readonly reason: string | void,
      message?: string,
    ) {
      super(reason, message || "Cannot sign account token for the session");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Cannot not sign account token for the claim ${JSON.stringify(
          this.claims,
        )}`,
      };
    }
  }
}
