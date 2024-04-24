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
} from "@toboo/shared";
import { UserId } from "../../domain";
import { UserDto } from "../../dto";
import { UserMapErrors } from "../../error";
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
