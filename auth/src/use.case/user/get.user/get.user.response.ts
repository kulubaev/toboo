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

import { Either, DomainErrors, ApiErrors } from "@toboo/shared";
import { UserErrors, UserIdErrors } from "../../../error";
import { UserDto } from "../../../dto";
import { UseCaseErrors } from "../../../error";
import { GetUserErrors } from "../../../error/user";

/**
 *
 */
export type GetUserResponse = Either<
  | GetUserErrors.UserRetrievalFailed
  | UseCaseErrors.NotFound
  | UseCaseErrors.InvalidDataError
  | UseCaseErrors.RequiredFieldError,
  UserDto
>;
