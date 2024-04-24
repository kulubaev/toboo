/**
 *
 *
 */

import { DomainErrors, Either } from "@toboo/shared";
import { UserId } from "./user.id";
import { UserPhone } from "./user.phone";
import { UserIdErrors } from "../../error";

export type UserIdResult = Either<
  DomainErrors.RequiredParameterNotPresent | UserIdErrors.UserIdCreationFailed,
  UserId
>;
export type UserPhoneResult = Either<
  DomainErrors.RequiredParameterNotPresent,
  UserPhone
>;

export { UserId, UserPhone };
