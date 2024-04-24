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

import { IUserRepo, UserResult } from ".";
import { UserMap } from "../../mapper";
import { UserDto } from "../../dto";
import { UserId } from "../../domain";
import { UserErrors } from "../../error";

export class UserRepo implements IUserRepo {
  /**
   *
   */
  constructor(
    private db: IDatabase<any>,
    private pgp: IMain,
  ) {}

  /**
   *
   */
  async get(id: UserId): Promise<UserResult<UserDto>> {
    try {
      /** */
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
}
