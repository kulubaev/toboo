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

    reason: string = this.serialize().message;
    /**
     */
    constructor(
      readonly parameter: string,
      message?: string,
      reason?: string,
    ) {
      super(
        message ||
          `Invalid data type for the  parameter ${parameter}. Please ensure parameter has correct data type `,
      );

      if (reason) {
        this.reason = reason;
      }
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
    /**
     */
    reason: string = `Required parameter ${this.parameter} is not present. Please make Sure its presence `;
    /***
     *
     */
    constructor(
      readonly parameter: string,
      message?: string,
      reason?: string,
    ) {
      super(
        message ||
          `Required parameter ${parameter} is not present. Please make Sure its presence `,
      );

      if (reason) {
        this.reason = reason;
      }
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

    constructor(
      public readonly reason: string,
      message?: string,
    ) {
      super(message || "Encountered unexpected halt");

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

    reason: string = this.serialize().message;
    /*
     */

    constructor(
      readonly token: string,
      reason: string,
      message?: string,
    ) {
      super(message || "Token cannot be decoded");

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

    reason: string = this.serialize().message;
    /*
     */

    constructor(
      readonly claims: JWTClaims,
      reason: string,
      message?: string,
    ) {
      super(message || "Cannot sign a token");

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

    reason: string = this.serialize().message;
    /*
     */

    constructor(reason: string, message?: string) {
      super(message || "Cannot create a refresh token");

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

      return { message: `Cannot create refresh token` };
    }
  }
}
