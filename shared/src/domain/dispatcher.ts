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

import { KeyValuePairs } from "../";
import { AggregateRoot } from "./aggregate.root";
import { UniqueId } from "./unique.id";
import { IDomainEvent } from "./event";

/**
 *
 *
 */
export interface Callback {
  callback(event: IDomainEvent): Promise<void>;
  eventName: string;
}
/**
 *
 */

export class Dispatcher {
  /**
   *
   */
  private static handlers: KeyValuePairs = {};
  private static aggregates: AggregateRoot<any>[] = [];

  /**
   *
   */
  private static dispatch(event: IDomainEvent): void {
    /**
     */
    const eventName = event.constructor.name;

    if (this.handlers.hasOwnProperty(eventName)) {
      /**
       */
      const handlers = this.handlers[eventName];
      /**
       */
      for (const handler of handlers) {
        handler(event);
      }
    }
  }
  /**
   *
   */
  private static getAggregate(id: UniqueId): AggregateRoot<any> {
    /**
     */
    let result: any = null;

    for (const aggregate of this.aggregates) {
      /**
       */
      if (aggregate.id.equals(id)) {
        result = aggregate;

        break;
      }
    }

    return result;
  }

  /**
   *
   */
  static clearHandlers(): void {
    /**
     */
    this.handlers = {};
  }
  /**
   *
   */

  static addAggregate(aggregate: AggregateRoot<any>): void {
    /**
     */
    if (!this.getAggregate(aggregate.id)) {
      /**
       */
      this.aggregates.push(aggregate);
    }
  }

  /**
   *
   */
  static removeAggregate(aggregate: AggregateRoot<any>): void {
    /**
     */
    for (let i = this.aggregates.length - 1; i >= 0; i--) {
      /**
       */
      if (this.aggregates[i].equals(aggregate)) {
        /**
         */
        this.aggregates.splice(i, 1);

        break;
      }
    }
  }

  /**
   *
   */

  static register(cb: Callback): void {
    /**
     */

    if (!this.handlers.hasOwnProperty(cb.eventName)) {
      this.handlers[cb.eventName] = [];
    }

    this.handlers[cb.eventName].push(cb.callback);
  }

  /**
   *
   */

  static dispatchAggregateEvents(id: UniqueId): void {
    try {
      /**
       */
      const aggregate = this.getAggregate(id);

      /**
       */
      if (aggregate) {
        /**
         */
        const { events } = aggregate;

        for (let i = events.length - 1; i >= 0; i--) {
          /**
           */
          try {
            /**/
            const event = events[i];

            this.dispatch(event);

            events.splice(i, 1);
          } catch (error: any) {
            continue;
          }
        }

        if (events.length === 0) {
          aggregate.clearEvents();
          this.removeAggregate(aggregate);
        }
      }
    } catch (error: any) {}
  }
}
