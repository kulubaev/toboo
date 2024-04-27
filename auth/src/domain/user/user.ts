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
  AggregateRoot,
  UniqueId,
  Guard,
  JWToken,
  RefreshToken,
  DomainErrors,
  left,
  right,
  nil,
} from "@toboo/shared";

import { UserId } from "./user.id";
import { UserEmail } from "./user.email";
import { UserSecret } from "./user.secret";
import { UserErrors } from "../../error";
import { UserResult } from ".";
/**
 *
 */
export interface UserProps {
  email: UserEmail;
  secret: UserSecret;
  verified: boolean;
  accessToken?: JWToken;
  refreshToken?: RefreshToken;
}

/**
 *
 */
export class User extends AggregateRoot<UserProps> {
  /**
   *
   */

  get userId(): UserId | void {
    const userId = UserId.create(this._id);

    return userId.isRight() ? userId.value : nil;
  }
  /**
   *
   */
  get email(): UserEmail {
    return this.props.email;
  }

  /**
   *
   */

  get secret(): UserSecret {
    return this.props.secret;
  }

  /**
   *
   */
  set secret(secret: UserSecret) {
    this.props.secret = secret;
  }
  /**
   *
   */

  get verified(): boolean {
    return this.props.verified;
  }

  /**
   *
   */

  get loggedIn(): boolean {
    return !!(this.props.accessToken && this.props.refreshToken);
  }

  /**
   *
   */

  get accessToken(): JWToken | void {
    return this.props.accessToken || nil;
  }

  /**
   *
   */
  set accessToken(token: string) {
    this.props.accessToken = token;
  }
  /**
   *
   */

  get refreshToken(): RefreshToken | void {
    return this.props.refreshToken || nil;
  }

  /**
   *
   */
  constructor(props: UserProps, id?: UniqueId) {
    super(props, id);
  }

  /**
   *
   */

  public static create(props: UserProps, id?: UniqueId): UserResult<User> {
    try {
      /**
       */
      let guard = Guard.NullOrUndefined(props, "User:create:props");

      /**
       */
      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "User",
            guard.error?.toString(),
          ),
        );
      }
      /**
       */
      guard = Guard.NullOrUndefined(props?.email, "User:create:props:email");

      /**
       */
      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserEmail",
            guard.error?.toString(),
          ),
        );
      }
      /**
       */
      guard = Guard.NullOrUndefined(props?.secret, "User:create:props:secret");

      /**
       */
      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserSecret",
            guard.error?.toString(),
          ),
        );
      }

      if (!id) {
        id = new UniqueId();
      }

      return right(
        new User(
          {
            ...props,
            verified: props.verified || false,
          },
          id,
        ),
      );
    } catch (error: any) {
      /**
       *
       */

      return left(new UserErrors.UserCreationFailed(error?.message));
    }
  }
}
