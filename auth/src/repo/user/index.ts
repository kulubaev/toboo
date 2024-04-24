import { DomainErrors, Either, pgdb, pgp } from "@toboo/shared";
import { UserId } from "../../domain";
import { UserErrors, UserMapErrors } from "../../error";
import { UserDto } from "../../dto";
import { UserRepo } from "./user.repo";

/**
 *
 */

export type UserResult<T> = Either<
  | UserErrors.UserRetrievalFailed
  | UserErrors.UserNotFound
  | UserMapErrors.UserMapFailed
  | DomainErrors.RequiredParameterNotPresent,
  T
>;

/**
 *
 */
export interface IUserRepo {
  get(id: UserId): Promise<UserResult<UserDto>>;
}

/**
 *
 */
const userRepo = new UserRepo(pgdb, pgp);
export { userRepo, UserRepo };
