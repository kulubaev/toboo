import groupBy from "lodash.groupby";
import {
  Mapper,
  Guard,
  Result,
  KeyValuePairs,
  MapResult,
  DomainErrors,
  left,
  right,
  nil,
  UniqueId,
} from "@toboo/shared";
import { UserId, User, UserEmail, UserSecret } from "../../domain";
import { UserDto } from "../../dto";
import {
  UserEmailErrors,
  UserErrors,
  UserIdErrors,
  UserMapErrors,
  UserSecretErrors,
} from "../../error";
import { UserMapResult } from ".";
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
export class UserMap extends Mapper {
  /**
   *
   */
  public static toPersist(user: User): UserMapResult<KeyValuePairs> {
    try {
      /**
       *
       */

      let guard = Guard.NullOrUndefined(user, "UserMap:toPersist:user");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toPersist:user",
          ),
        );
      }
      /**
       *
       */

      guard = Guard.NullOrUndefined(user.id, "UserMap:toPersist:user:id");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toPersist:user:id",
          ),
        );
      }
      /**
       *
       */

      guard = Guard.NullOrUndefined(user.email, "UserMap:toPersist:user:email");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toPersist:user:email",
          ),
        );
      }
      /**
       *
       */

      guard = Guard.NullOrUndefined(
        user.email,
        "UserMap:toPersist:user:secret",
      );

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toPersist:user:secret",
          ),
        );
      }

      return right({
        id: user.id.toString(),
        email: user.email.value,
        secret: user.secret.value,
      });
    } catch (error: any) {
      /**
       *
       */
      return left(new UserMapErrors.UserMapFailed(error?.message));
    }
  }
  /**
   *
   */

  public static async toDomain(
    raw: KeyValuePairs,
  ): Promise<UserMapResult<User>> {
    try {
      /**
       *
       */

      let guard = Guard.NullOrUndefined(raw, "UserMap:toDomain:raw");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent("UserMap:toDomain:raw"),
        );
      }

      /**
       */
      guard = Guard.NullOrUndefined(raw.id, "UserMap:toDto:raw:id");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toDomain:raw:id",
          ),
        );
      }

      /**
       */
      guard = Guard.NullOrUndefined(raw.email, "UserMap:toDomain:raw:email");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toDomain:raw:email",
          ),
        );
      }

      /**
       */
      guard = Guard.NullOrUndefined(raw.email, "UserMap:toDomain:raw:secret");

      if (guard.isFailure) {
        /**
         */
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toDomain:raw:secret",
          ),
        );
      }

      /**
       */
      const userEmail = UserEmail.create(raw.email);
      if (userEmail.isLeft()) {
        /**
         */
        return left(
          new UserEmailErrors.UserEmailCreationFailed(
            raw.email,
            userEmail.value.reason,
            userEmail.value.message,
          ),
        );
      }
      /**
       */
      const userSecret = await UserSecret.create(raw.secret, true);
      if (userSecret.isLeft()) {
        /**
         */
        return left(
          new UserSecretErrors.UserSecretCreationFailed(
            userSecret.value.reason,
            userSecret.value.message,
          ),
        );
      }

      /**
       */
      const user = User.create(
        {
          email: userEmail.value,
          secret: userSecret.value,
          verified: !!raw.verified,
        },
        new UniqueId(raw.id),
      );

      if (user.isLeft()) {
        /**
         */
        return left(
          new UserErrors.UserCreationFailed(
            user.value.reason,
            user.value.message,
          ),
        );
      }

      return right(user.value);
    } catch (error: any) {
      /**
       */
      return left(new UserMapErrors.UserMapFailed(error?.message));
    }
  }

  /**
   *
   */

  public static toDto(raw: KeyValuePairs): UserMapResult<UserDto> {
    try {
      /**
       *
       */

      let nullGuard = Guard.NullOrUndefined(raw, "UserMap:toDto:raw");

      if (nullGuard.isFailure) {
        return left(
          new DomainErrors.RequiredParameterNotPresent("UserMap:toDto:raw"),
        );
      }

      /**
       */
      nullGuard = Guard.NullOrUndefined(raw.id, "UserMap:toDto:raw:id");

      if (nullGuard.isFailure) {
        return left(
          new DomainErrors.RequiredParameterNotPresent("UserMap:toDto:raw:id"),
        );
      }

      /**
       */
      nullGuard = Guard.NullOrUndefined(raw.phone, "UserMap:toDto:raw:phone");

      if (nullGuard.isFailure) {
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toDto:raw:phone",
          ),
        );
      }

      /**
       */
      nullGuard = Guard.NullOrUndefined(
        raw.firstName,
        "UserMap:toDto:raw:firstName",
      );

      if (nullGuard.isFailure) {
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toDto:raw:firstName",
          ),
        );
      }

      /**
       */
      nullGuard = Guard.NullOrUndefined(
        raw.lastName,
        "UserMap:toDto:raw:lastName",
      );

      if (nullGuard.isFailure) {
        return left(
          new DomainErrors.RequiredParameterNotPresent(
            "UserMap:toDto:raw:lastName",
          ),
        );
      }

      const { id, phone, firstName, lastName } = raw;

      return right({
        id,
        phone,
        firstName,
        lastName,
      });
    } catch (error: any) {
      /**
       */
      return left(new UserMapErrors.UserMapFailed(error?.message));
    }
  }
  /**
   *
   *
   */

  public static toCollectionDto(
    raw: KeyValuePairs[] = [],
  ): UserMapResult<UserDto[]> {
    /**
     *
     */
    try {
      /**
       *
       */
      const groupByUser = groupBy(
        raw,
        ({
          id,
          phone,
          firstName,
          lastName,
        }: {
          id: string;
          phone: string;
          firstName: string;
          lastName: string;
        }) => {
          return JSON.stringify({
            id,
            phone,
            firstName,
            lastName,
          });
        },
      );

      /*
       */
      const result = Object.entries(groupByUser).flatMap(([key, value]) => {
        /**
         */
        const mapUser = UserMap.toDto(JSON.parse(key));

        // other properties like roles will be mapped along

        if (mapUser.isRight()) {
          const user = mapUser.value;
          return [user];
        }

        return [];
      });

      /*
       */
      return right(result);
    } catch (error: any) {
      /**
       *
       */
      return left(new UserMapErrors.UserMapFailed(error?.message));
    }
  }
}
