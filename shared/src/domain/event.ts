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
import { UniqueId } from "./unique.id";

/**
 *
 */
export interface IDomainEvent extends KeyValuePairs {
  timeOfOccurence: Date;
  aggregateId(): UniqueId;
}
