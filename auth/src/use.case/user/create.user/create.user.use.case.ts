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
  ApiErrors,
  UseCase,
  Guard,
  Result,
  UniqueId,
  DomainErrors,
  UseCaseErrors,
  nil,
  left,
  right,
} from "@toboo/shared";

import { IUserRepo } from "../../../repo";
import { User, UserEmail, UserSecret } from "../../../domain";
import { UserEmailErrors } from "../../../error";
import { CreateUserRequest } from "./create.user.request";
import { CreateUserResponse } from "./create.user.response";
import { CreateUserErrors } from "./create.user.errors";
import { UserCreatedEvent } from "../../../event";

/**
 *
 */
export class CreateUserUseCase
  implements UseCase<CreateUserRequest, CreateUserResponse>
{
  /**
   *
   */

  constructor(private repo: IUserRepo) {}

  /**
   *
   */

  async execute(req: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      /**
       */
      let guard = Guard.NullOrUndefined(
        req.email,
        "CreateUserUseCase:executing:user:email",
      );

      if (guard.isFailure) {
        /**
         *
         */
        return left(
          new UseCaseErrors.RequiredFieldError(
            "Email",
            "User email is required field. Please make sure its presence",
          ),
        );
      }

      /**
       */
      guard = Guard.NullOrUndefined(
        req.secret,
        "CreateUserUseCase:executing:user:secret",
      );

      if (guard.isFailure) {
        /**
         *
         */
        return left(
          new UseCaseErrors.RequiredFieldError(
            "Secret",
            "User secret is required field. Please make sure its presence",
          ),
        );
      }
      /*
       *
       */

      const canCreateEmail = UserEmail.create(req.email);

      if (canCreateEmail.isLeft()) {
        return left(
          new UseCaseErrors.InvalidDataError(
            req.email,
            `Can not validate user email ${req.email}. Please make sure you entered valid User Email`,
          ),
        );
      }

      const email = canCreateEmail.value;

      /**
       *
       */

      const canRegister = await this.repo.canRegister(email);

      if (canRegister.isLeft()) {
        if (
          canRegister.value.constructor ===
          UserEmailErrors.UserEmailAlreadyRegistered
        ) {
          return left(
            new UseCaseErrors.InvalidDataError(
              req.email,
              canRegister.value.serialize()?.message,
            ),
          );
        }
      }

      const canCreateSecret = await UserSecret.create(req.secret, false);

      if (canCreateSecret.isLeft()) {
        /**
         */
        return left(new CreateUserErrors.UserCreationFailed());
      }

      const secret = canCreateSecret.value;

      /**
       *
       */

      const canCreateUser = User.create({ email, secret, verified: false });

      if (canCreateUser.isLeft()) {
        /**
         */
        return left(new CreateUserErrors.UserCreationFailed());
      }

      const user = canCreateUser.value;
      /**
       *
       */

      const userCreated = UserCreatedEvent.create(user.id, {
        data: {
          email: email.value,
        },
      });

      if (userCreated.isSuccess) {
        user.addEvent(userCreated.value);
      }

      /**
       *
       */

      const canPersist = await this.repo.save(user);

      if (canPersist.isLeft()) {
        /**
         */
        return left(new CreateUserErrors.UserCreationFailed());
      }
      /**
       *
       */
      return right(canPersist.value);
    } catch (error: any) {
      /**
       *
       */
      return left(new CreateUserErrors.UserCreationFailed());
    }
  }
}
