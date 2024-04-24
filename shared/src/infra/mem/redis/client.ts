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

import { nil, left, right } from "../../../core";
import { RedisErrors } from "../../../error";
import { RedisResult, RedisClientType } from ".";

/**
 */
abstract class RedisClient {
  /**
   */
  constructor(protected readonly client: RedisClientType) {}

  /**
   *
   */
  async connect(): Promise<RedisResult<void>> {
    /**
     *
     */
    try {
      /**
       *
       */
      if (!this.client.isReady) {
        /**
         */
        await this.client.connect();
      }

      return right(nil);
    } catch (error: any) {
      /**
       */
      return left(new RedisErrors.CannotConnect());
    }
  }

  /**
   *
   */

  async getOne<T extends string>(key: string): Promise<RedisResult<T>> {
    /**
     *
     */
    try {
      /**
       *
       */
      const canConnect = await this.connect();

      if (canConnect.isRight()) {
        /**
         *
         */
        const one = await this.client.get(key);

        return right(<T>one);
      }

      return canConnect;
    } catch (error: any) {
      /**
       */
      return left(new RedisErrors.EntryRetrievalFailed(key, error?.message));
    }
  }

  /**
   *
   */
  async set(key: string, value: any): Promise<RedisResult<void>> {
    /**
     *
     */
    try {
      const canConnect = await this.connect();

      if (canConnect.isRight()) {
        /**
         *
         */
        await this.client.set(key, value);

        return right(nil);
      }

      return canConnect;
    } catch (error: any) {
      /**
       *
       */
      return left(
        new RedisErrors.EntryCreationFailed(key, value, error?.message),
      );
    }
  }

  /**
   *
   */

  async getAllKeys(criteria: string): Promise<RedisResult<string[]>> {
    /**
     *
     */
    try {
      /**
       *
       */

      const canConnect = await this.connect();

      if (canConnect.isRight()) {
        /**
         *
         */
        const keys = await this.client.keys(criteria);

        return right(keys);
      }

      return canConnect;
    } catch (error: any) {
      /**
       *
       */
      return left(new RedisErrors.EntriesCannotBeRetrieved(error?.message));
    }
  }
  /**
   *
   */

  async deleteOne(key: string): Promise<RedisResult<void>> {
    /**
     *
     */
    try {
      /**
       *
       */
      const canConnect = await this.connect();

      if (canConnect.isRight()) {
        /**
         */
        await this.client.del(key);

        return right(nil);
      }

      return canConnect;
    } catch (error: any) {
      /**
       */
      return left(new RedisErrors.EntryDeletionFailed(error?.message));
    }
  }
}

export { RedisClient };
