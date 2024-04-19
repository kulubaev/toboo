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

import { Entity } from "./entity";
import { UniqueId } from "./unique.id";
import { IDomainEvent } from "./event";
import { Dispatcher } from "./dispatcher";

export abstract class AggregateRoot<T> extends Entity<T> {
  /**
   *
   */
  abstract get id(): { value: UniqueId };

  /**
   *
   */
  private domainEvents: IDomainEvent[] = [];

  /**
   *
   */
  get events(): IDomainEvent[] {
    /**
     */
    return this.domainEvents;
  }

  /**
   *
   */
  addEvent(event: IDomainEvent): void {
    /**
     *
     */
    this.domainEvents.push(event);

    /**
     *
     */
    Dispatcher.addAggregate(this);
  }

  /**
   *
   */

  clearEvents(): void {
    /**
     */
    this.domainEvents.splice(0, this.domainEvents.length);
  }
}
