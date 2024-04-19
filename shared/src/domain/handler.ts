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

import { IDomainEvent } from "./event";

/**
 *
 */
export interface IHandler<IDomainEvent> {
  /**
   *
   */
  subscribe(): void;
}
