/**
 * What it does.
 *
 * @param name - Parameter description.
 * @returns Type and description of the returned object.
 *
 * @example
 * ```
 * Write me later. ```
 */

import { createClient } from "redis";
import { Result, left, right, nil } from "../../../core";
import { RedisClient, RedisClientType, JWToken } from "../../../infra";
import { ISessionService, SessionResult } from "..";
import { SessionErrors, RedisErrors } from "../../../error";

/**
 *
 */

export class SessionService extends RedisClient implements ISessionService {
  /**
   *
   */
  protected salt: string = "redis.stored.sessions";

  /**
   *
   */

  constructor(protected client: RedisClientType) {
    super(client);
  }

  /**
   */

  async getSessionId(refreshToken: string): Promise<SessionResult<string>> {
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
        const canRetrieve = await this.getAllKeys(`*${refreshToken}*`);

        if (canRetrieve.isRight()) {
          /**
           *
           */

          const keys = canRetrieve.value!;

          if (keys.length === 0) {
            /**
             *
             */
            return left(new SessionErrors.NoSessionFound(refreshToken));
          }

          return right(keys[0]);
        }
      }

      return left(new SessionErrors.CannotConnect(canConnect.value?.reason));
    } catch (error: any) {
      /**
       *
       */

      return left(new SessionErrors.UnexpectedHalt(error?.message));
    }
  }

  /**
   *
   *
   */

  async getSession(refreshToken: string): Promise<SessionResult<JWToken>> {
    /**
     *
     */
    try {
      const canConnect = await this.connect();

      if (canConnect.isRight()) {
        /**
         *
         */
        const canRetrieve = await this.getAllKeys(`*${refreshToken}*`);

        if (canRetrieve.isRight()) {
          /**
           *
           */

          const keys = canRetrieve.value!;

          if (keys.length === 0) {
            /**
             *
             */
            return left(new SessionErrors.NoSessionFound(refreshToken));
          }

          const token = await this.getOne<JWToken>(keys[0]);

          if (token.isLeft()) {
            if (token.constructor === RedisErrors.EntryRetrievalFailed) {
              return left(
                new SessionErrors.CannotRetrieveSessionEntry(
                  keys[0],
                  (token as RedisErrors.EntryRetrievalFailed).reason,
                ),
              );
            }
          }

          return right(token.value as JWToken);
        }

        return left(
          new SessionErrors.CannotRetrievSessionEntries(
            canRetrieve?.value?.reason,
          ),
        );
      }

      return left(new SessionErrors.CannotConnect(canConnect?.value?.reason));
    } catch (error: any) {
      /**
       *
       */

      return left(new SessionErrors.UnexpectedHalt(error?.message));
    }
  }

  /***
   *
   */

  async getAllSessions(criteria: string): Promise<SessionResult<JWToken[]>> {
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
        const canRetrieve = await this.getAllKeys(`*${this.salt}.${criteria}`);

        if (canRetrieve.isRight()) {
          /**
           *
           */

          const keys = canRetrieve.value;

          const tokens = await Promise.all(
            keys!.map(async (key) => {
              /**
               */
              const token = await this.getOne<JWToken>(key);

              if (token.isRight()) {
                return token.value;
              }
            }),
          );

          return right(tokens.flatMap((token) => (token ? [token] : [])));
        }
      }

      return canConnect;
    } catch (error: any) {
      /**
       *
       */
      return left(new SessionErrors.UnexpectedHalt(error?.message));
    }
  }
  /**
   *
   */

  async clearAllSessions(id: string): Promise<SessionResult<void>> {
    /**
     *
     */
    try {
      const canConnect = await this.connect();

      if (canConnect.isRight()) {
        /**
         */
        const canRetrieve = await this.getAllKeys(`*${this.salt}.${id}`);

        if (canRetrieve.isRight()) {
          /**
           *
           */

          const keys = canRetrieve.value;

          await Promise.all(keys!.flatMap((key) => this.deleteOne(key)));

          return right(nil);
        }

        return left(
          new SessionErrors.CannotRetrievSessionEntries(
            canRetrieve.value.reason,
          ),
        );
      }

      return canConnect;
    } catch (error: any) {
      /**
       */
      return left(new SessionErrors.UnexpectedHalt(error?.message));
    }
  }
  /**
   *
   */

  /**
   *
   */
  static create(opts: {
    host: string;
    password: string;
  }): SessionResult<SessionService> {
    /**
     */
    try {
      /**
       *
       */
      const client: RedisClientType = createClient({
        password: opts.password,
        socket: { host: opts.host, port: 6379 },
      });

      return right(new SessionService(client));
    } catch (error: any) {
      /**
       *
       */
      return left(new SessionErrors.UnexpectedHalt(error?.message));
    }
  }
}
