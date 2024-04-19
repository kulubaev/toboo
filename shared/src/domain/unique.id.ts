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

import { uuidv7 } from "uuidv7";
import { Identifier } from "./identifier";

/**
 *
 */
export class UniqueId extends Identifier<string | number> {
  /**
   *
   */

  constructor(id?: string | number) {
    super(id || uuidv7());
  }
}
