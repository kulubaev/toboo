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

import {
  KeyValuePairs,
  Result,
  Guard,
  DomainErrors,
  left,
  right,
  nil,
} from "@toboo/shared";
import pgPromise, { IDatabase, IMain } from "pg-promise";
import { IResult } from "pg-promise/typescript/pg-subset";
import { sql } from "../../infra";

import { IUserRepo } from ".";
import { UserMap } from "../../mapper";
import { UserDto } from "../../dto";
import { User, UserEmail, UserId, UserResult } from "../../domain";
import {
  UserEmailErrors,
  UserIdErrors,
  UserErrors,
  UserMapErrors,
} from "../../error";

export class UserRepo implements IUserRepo {
  /**
   *
   */
  constructor(
    private db: IDatabase<any>,
    private pgp: IMain,
  ) {}

  /***
   */

  async canRegister(email: UserEmail): Promise<UserResult<void>> {
    /**
     */
    try {
      /**
       */
      const nullGuard = Guard.NullOrUndefined(email, "UserRepo:get:email");

      if (nullGuard.isFailure) {
        /***
         *
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "User:Email",
            nullGuard.error!.toString(),
          ),
        );
      }

      /**
       */
      const raw = await this.db.oneOrNone(sql.user.find_email, {
        user_email: email.value,
      });

      if (raw) {
        return left(new UserEmailErrors.UserEmailAlreadyRegistered(email));
      }

      /**
       */
      return right(nil);
    } catch (error: any) {
      return left(
        new UserEmailErrors.UserEmailLookupFailed(email, error?.message),
      );
    }
  }
  /***
   */

  async exists(id: UserId): Promise<UserResult<void>> {
    /**
     */
    try {
      /**
       */
      const nullGuard = Guard.NullOrUndefined(id, "UserRepo:get:id");

      if (nullGuard.isFailure) {
        /***
         *
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "User:Id",
            nullGuard.error!.toString(),
          ),
        );
      }

      /**
       */
      const raw = await this.db.oneOrNone(sql.user.find_one, {
        user_id: id.value.toString(),
      });

      if (!raw) {
        return left(new UserErrors.UserNotFound(id));
      }

      /**
       */
      return right(nil);
    } catch (error: any) {
      /**
       */
      return left(new UserIdErrors.UserIdLookupFailed(id, error?.message));
    }
  }

  /**
   */

  async hydrate(id: UserId): Promise<UserResult<User>> {
    /**
     */
    try {
      /**
       */
      const nullGuard = Guard.NullOrUndefined(id, "UserRepo:get:id");

      if (nullGuard.isFailure) {
        /***
         *
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "User:Id",
            nullGuard.error!.toString(),
          ),
        );
      }

      const raw = await this.db.oneOrNone(sql.user.find_one, {
        user_id: id.value.toString(),
      });

      if (!raw) {
        return left(new UserErrors.UserNotFound(id));
      }

      const canMap = await UserMap.toDomain(raw);

      if (canMap.isRight()) {
        return right(canMap.value);
      }

      return canMap;
    } catch (error: any) {
      /**
       *
       */
      return left(
        new UserErrors.UserHydrateFailed(id.value.toString(), error?.message),
      );
    }
  }

  /**
   *
   */
  async get(id: UserId): Promise<UserResult<UserDto>> {
    /**
     */
    try {
      /**
       */
      const nullGuard = Guard.NullOrUndefined(id, "UserRepo:get:id");

      if (nullGuard.isFailure) {
        /***
         *
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "User:Id",
            nullGuard.error!.toString(),
          ),
        );
      }

      const raw = await this.db.oneOrNone(sql.user.find_one, {
        user_id: id.value.toString(),
      });

      if (!raw) {
        return left(new UserErrors.UserNotFound(id));
      }

      const canMap = UserMap.toDto(raw);

      if (canMap.isRight()) {
        return right(canMap.value);
      }

      return canMap;
    } catch (error: any) {
      /**
       *
       */
      return left(new UserErrors.UserRetrievalFailed(id));
    }
  }
  /**
   *
   */
  async save(user: User): Promise<UserResult<UserDto>> {
    /**
     */
    try {
      const canMap = UserMap.toPersist(user);

      if (canMap.isLeft()) {
        /**
         */
        return left(
          new UserMapErrors.UserMapFailed(
            canMap.value.reason,
            canMap.value.message,
          ),
        );
      }

      const { id, ...raw } = canMap.value;

      /**
       */
      const exists = await this.db.oneOrNone(sql.user.find_one, {
        user_id: id,
      });

      if (exists) {
      }

      const result = await this.db.tx((t) => {
        /*
         *
         */
        const inserted = t.oneOrNone(sql.user.add_one, {
          id,
          ...raw,
        });

        return t.batch([inserted]);
      });

      const persisted = UserMap.toDto(result);

      if (persisted.isLeft()) {
        /**
         */
        return left(
          new UserMapErrors.UserMapFailed(
            canMap.value.reason,
            canMap.value.message,
          ),
        );
      }

      return right(persisted.value);
    } catch (error: any) {
      /**
       */
      return left(
        new UserErrors.UserPersistFailed(user.id.toString(), error?.message),
      );
    }
  }
}
