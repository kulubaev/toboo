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
import { DomainError, ISerializeError } from "./base";

/**
 *
 *
 */
export namespace DomainErrors {
  /**
   *
   */
  export class InvalidData extends DomainError {
    /**
     */
    constructor(
      readonly parameter: string,
      reason: string | void,
      message?: string,
    ) {
      super(
        reason,
        message ||
          `Invalid data type for the  parameter ${parameter}. Please ensure parameter has correct data type `,
      );
    }

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Invalid data type for the  parameter ${this.parameter}. Please ensure parameter has correct data type `,
      };
    }
  }

  /**
   *
   */
  export class RequiredParameterNotPresent extends DomainError {
    /***
     *
     */
    constructor(
      readonly parameter: string,
      reason: string | void,
      message?: string,
    ) {
      super(
        reason,
        message ||
          `Required parameter ${parameter} is not present. Please make Sure its presence `,
      );
    }

    /**
     *
     */
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return {
        message: `Required parameter ${this.parameter} is not present. Please make Sure its presence `,
      };
    }
  }
  /**
   *
   */
  export class UnexpectedHalt extends DomainError {
    /*
     */

    constructor(reason: string | void, message?: string) {
      super(reason, message || "Encountered unexpected halt");
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

  /**
   *
   */
  export class TokenExtractionFailed extends DomainError {
    /**
     *
     */

    constructor(
      readonly token: string,
      reason: string,
      message?: string,
    ) {
      super(reason, message || "Token cannot be decoded");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: `Token ${this.token} cannot be decoded` };
    }
  }

  /**
   *
   */
  export class TokenSigningFailed extends DomainError {
    /**
     *
     */

    constructor(
      readonly claims: JWTClaims,
      reason: string | void,
      message?: string,
    ) {
      super(reason, message || "Cannot sign a token");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: `Claims ${this.claims} cannot be signed` };
    }
  }

  /**
   *
   */
  export class RefreshTokenCannotBeIssued extends DomainError {
    /**
     *
     */

    constructor(reason: string | void, message?: string) {
      super(reason, message || "Cannot create a refresh token");
    }
    /**
     *
     */

    serialize(): ISerializeError {
      /*
       */

      return { message: `Cannot create refresh token` };
    }
  }
}
