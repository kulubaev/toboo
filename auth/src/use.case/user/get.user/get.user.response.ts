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

import { DomainErrors, Either, UseCaseErrors } from "@toboo/shared";
import { UserDto } from "../../../dto";
import { GetUserErrors } from "./get.user.errors";

/**
 *
 */
export type GetUserResponse = Either<
  | DomainErrors.UnexpectedHalt
  | GetUserErrors.UserRetrievalFailed
  | GetUserErrors.UserCanNotBeFound
  | UseCaseErrors.InvalidDataError
  | UseCaseErrors.RequiredFieldError,
  UserDto
>;
