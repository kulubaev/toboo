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
import { Controller, UseCase, ApiErrors } from "@toboo/shared";

import { UserDto } from "../../../dto";
import { GetUserRequest } from "./get.user.request";
import { GetUserResponse } from "./get.user.response";
import { UseCaseErrors, UserErrors } from "../../../error";

/**
 *
 */
export class GetUserController extends Controller {
  /**
   *
   */

  constructor(private useCase: UseCase<GetUserRequest, GetUserResponse>) {
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
        id: req.query.id?.toString(),
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
        case UseCaseErrors.NotFound:
        case UseCaseErrors.RequiredFieldError:
        case UseCaseErrors.InvalidDataError:
          this.failed(res, new ApiErrors.BadRequest(result.value?.message));
          break;

        case UserErrors.UserRetrievalFailed:
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
