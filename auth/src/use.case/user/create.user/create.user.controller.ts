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

import { Request, Response } from "express";
import { Controller, UseCase, ApiErrors, UseCaseErrors } from "@toboo/shared";

import { UserDto } from "../../../dto";
import { UserErrors } from "../../../error";
import { CreateUserRequest } from "./create.user.request";
import { CreateUserResponse } from "./create.user.response";
import { CreateUserErrors } from "./create.user.errors";

/**
 *
 */
export class CreateUserController extends Controller {
  /**
   *
   */

  constructor(private useCase: UseCase<CreateUserRequest, CreateUserResponse>) {
    super();
  }

  /**
   *
   */

  protected async executing(req: Request, res: Response): Promise<any> {
    /**
     *
     */

    try {
      /**
       *
       */

      const result = await this.useCase.execute({
        email: req.body.email,
        secret: req.body.secret,
      });

      if (result.isRight()) {
        return this.ok<UserDto>(res, result.value);
      }

      /**
       *
       */

      switch (result.value!.constructor) {
        /**
         */

        case CreateUserErrors.UserEmailAlreadyRegistered:
        case UseCaseErrors.RequiredFieldError:
        case UseCaseErrors.InvalidDataError:
          this.failed(res, new ApiErrors.BadRequest(result.value?.message));
          break;

        case UserErrors.UserRetrievalFailed:
        case CreateUserErrors.UserCreationFailed:
        default:
          this.failed(res, new ApiErrors.UnexpectedHalt(result.value?.message));
          break;
      }
    } catch (error: any) {
      /*
       */
      return this.failed(res, error?.message);
    }
  }
}
