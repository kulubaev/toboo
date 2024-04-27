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
import { CreateUserErrors } from "./create.user.errors";

/**
 *
 */
export type CreateUserResponse = Either<
  | DomainErrors.UnexpectedHalt
  | CreateUserErrors.UserCreationFailed
  | UseCaseErrors.InvalidDataError
  | UseCaseErrors.RequiredFieldError,
  UserDto
>;
