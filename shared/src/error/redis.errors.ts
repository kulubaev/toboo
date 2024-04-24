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
export namespace RedisErrors {
  /**
   *
   */
  export class CannotConnect extends InfraError {
    /*
     */
    reason = "Cannot connect to redis instance";
    /*
     */

    constructor(reason?: string) {
      super("Cannot connect to redis instance");

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

      return { message: "Cannot connect to redis instance" };
    }
  }
  /**
   *
   */
  export class EntryRetrievalFailed extends InfraError {
    /*
     */
    reason = "Failed to retrieve redis entry via given key";
    /*
     */

    constructor(
      private readonly key: string,
      message: string = "Failed to retrieve redis entry via given key",
      reason?: string,
    ) {
      super(message);

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
        message: `Cannot retrieve redis entry via given key ${this.key} `,
      };
    }
  }

  /**
   *
   */
  export class EntriesCannotBeRetrieved extends InfraError {
    /*
     */
    reason = "Failed to retrieve redis entries";
    /*
     */

    constructor(
      reason: string,
      message: string = "Failed to retrieve redis entries",
    ) {
      super(message);

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
        message: "Cannot retrieve redis entries",
      };
    }
  }

  /**
   *
   */
  export class EntryCreationFailed extends InfraError {
    /*
     */
    reason = "Failed to create redis entry for given key value pairs";
    /*
     */

    constructor(
      private readonly key: string,
      private readonly value: any,
      message: string = "Failed to create redis entry for given key value pairs",
      reason?: string,
    ) {
      super(message);

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
        message: `Failed to create redis entry for given key  ${this.key} and value ${this.value} pairs`,
      };
    }
  }

  /**
   *
   */
  export class EntryDeletionFailed extends InfraError {
    /*
     */
    reason = "Failed to remove redis entry for given key ";
    /*
     */

    constructor(
      private readonly key: string,
      message: string = "Failed to remove redis entry for given key ",
      reason?: string,
    ) {
      super(message);

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
        message: `Failed to remove redis entry for given key  ${this.key}`,
      };
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
