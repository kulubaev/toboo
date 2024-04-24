/**
 *
 */

import { Either, Guard, DomainErrors } from "@toboo/shared";
import { UserDto } from "../../dto";
import { UserMapErrors } from "../../error";

/**
 *
 */
export type UserMapResult<T> = Either<
  DomainErrors.RequiredParameterNotPresent | UserMapErrors.UserMapFailed,
  T
>;

/**
 *
 */

export { UserMap } from "./user.map";
