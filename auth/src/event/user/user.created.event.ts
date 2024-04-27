/**
 *
 */

import { IDomainEvent, UniqueId, Result, KeyValuePairs } from "@toboo/shared";
import { UserId, User } from "../../domain";

/**
 *
 */
export interface UserCreatedEventPayload {
  data: KeyValuePairs;
}
/**
 *
 */

export class UserCreatedEvent implements IDomainEvent {
  /**
   */
  readonly timeOfOccurence: Date;

  /**
   *
   */

  private constructor(
    public id: UniqueId,
    public payload: UserCreatedEventPayload,
  ) {
    this.timeOfOccurence = new Date();
  }

  /**
   *
   */
  aggregateId(): UniqueId {
    return this.id;
  }

  /**
   *
   */

  static create(
    id: UniqueId,
    payload: UserCreatedEventPayload,
  ): Result<UserCreatedEvent> {
    try {
      /**
       *
       */
      return Result.ok(new UserCreatedEvent(id, payload));
    } catch (error: any) {
      /**
       *
       */
      return Result.fail(error?.message);
    }
  }
}
