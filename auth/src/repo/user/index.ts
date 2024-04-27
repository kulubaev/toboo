import { DomainErrors, Either, pgdb, pgp } from "@toboo/shared";
import { UserId, UserEmail, User, UserResult } from "../../domain";
import { UserDto } from "../../dto";
import { UserRepo } from "./user.repo";

/**
 *
 */

/**
 *
 */
export interface IUserRepo {
  canRegister(email: UserEmail): Promise<UserResult<void>>;
  exists(id: UserId): Promise<UserResult<void>>;
  hydrate(id: UserId): Promise<UserResult<User>>;
  get(id: UserId): Promise<UserResult<UserDto>>;
  save(user: User): Promise<UserResult<UserDto>>;
}

/**
 *
 */
const userRepo = new UserRepo(pgdb, pgp);
export { userRepo, UserRepo };
