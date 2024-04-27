/**
 *
 *
 */

import { DomainErrors, Either } from "@toboo/shared";
import { UserId } from "./user.id";
import { UserEmail } from "./user.email";
import { UserSecret } from "./user.secret";

import {
  UserErrors,
  UserIdErrors,
  UserEmailErrors,
  UserSecretErrors,
  UserMapErrors,
} from "../../error";
/**
 *
 */
export type UserIdResult = Either<
  DomainErrors.RequiredParameterNotPresent | UserIdErrors.UserIdCreationFailed,
  UserId
>;

/**
 *
 */
export type UserEmailResult = Either<
  | UserEmailErrors.UserEmailCreationFailed
  | DomainErrors.RequiredParameterNotPresent,
  UserEmail
>;
/**
 *
 */
export type UserSecretResult = Either<
  | UserSecretErrors.UserSecretHasInvalidLength
  | UserSecretErrors.UserSecretHashingFailed
  | UserSecretErrors.UserSecretCreationFailed
  | DomainErrors.RequiredParameterNotPresent,
  UserSecret
>;

export type UserResult<T> = Either<
  | UserEmailErrors.UserEmailAlreadyRegistered
  | UserIdErrors.UserIdLookupFailed
  | UserErrors.UserPersistFailed
  | UserErrors.UserRetrievalFailed
  | UserErrors.UserNotFound
  | UserMapErrors.UserMapFailed
  | DomainErrors.RequiredParameterNotPresent,
  T
>;

export { User } from "./user";
export { UserId, UserEmail, UserSecret };
