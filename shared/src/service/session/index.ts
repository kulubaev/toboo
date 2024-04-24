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

import { Either } from "../../core";
import { RefreshToken, JWToken } from "../..";
import { SessionErrors } from "../../error";

/**
 *
 */
export type SessionResult<T> = Either<
  | SessionErrors.CannotConnect
  | SessionErrors.CannotRetrieveSessionEntry
  | SessionErrors.CannotRetrievSessionEntries
  | SessionErrors.UnexpectedHalt
  | SessionErrors.NoSessionFound,
  T | void
>;

/**
 *
 */
export interface ISessionService {
  /**
   *
   */
  getSession(refreshToken: RefreshToken): Promise<SessionResult<JWToken>>;

  /**
   *
   */
  getSessionId(refreshToken: RefreshToken): Promise<SessionResult<string>>;

  /**
   *
   */
  getAllSessions(criteria: string): Promise<SessionResult<JWToken[]>>;

  /**
   *
   */
  clearAllSessions(criteria: string): Promise<SessionResult<void>>;
}

/**
 *
 */
export { sessionService, SessionService } from "./redis";
