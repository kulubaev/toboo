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
import { uniqueId } from "lodash";

import {
  ApiErrors,
  UseCase,
  Guard,
  Result,
  UniqueId,
  DomainErrors,
  nil,
  left,
  right,
} from "@toboo/shared";

import { UserId } from "../../../domain";
import { GetUserRequest } from "./get.user.request";
import { GetUserResponse } from "./get.user.response";
import { IUserRepo } from "../../../repo";
import { UseCaseErrors, UserIdErrors } from "../../../error";
import { GetUserErrors, UserErrors } from "../../../error/user";

/**
 *
 */
export class GetUserUseCase
  implements UseCase<GetUserRequest, GetUserResponse>
{
  /**
   *
   */

  constructor(private repo: IUserRepo) {}

  /**
   *
   */

  async execute(req: GetUserRequest): Promise<GetUserResponse> {
    try {
      const nullGuard = Guard.NullOrUndefined(
        req.id,
        "GetUserUseCase:executing:userId",
      );

      if (nullGuard.isFailure) {
        /**
         *
         */
        return left(
          new UseCaseErrors.RequiredFieldError(
            "id",
            "User id is required field. Please make sure its presence",
          ),
        );
      }

      /*
       *
       */

      const canCreate = UserId.create(req.id!);

      if (canCreate.isLeft()) {
        return left(
          new UseCaseErrors.InvalidDataError(
            req.id!,
            `Can not validate user id ${req.id}. Please make sure you entered valid UserId`,
          ),
        );
      }

      /**
       *
       */
      const canRetrieve = await this.repo.get(canCreate.value);

      if (canRetrieve.isLeft()) {
        return left(
          new GetUserErrors.UserCanNotBeRetrieved(
            req.id!,
            `Unexpected error.User with id ${req.id!} can not be retrieved`,
          ),
        );
      }
      /**
       *
       */
      return right(canRetrieve.value);
    } catch (error: any) {
      /**
       *
       */
      return left(
        new GetUserErrors.UserRetrievalFailed(req.id!, error?.message),
      );
    }
  }
}
