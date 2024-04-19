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

import { KeyValuePairs } from "../core";

export abstract class ValueObject<T extends KeyValuePairs> {
  /**
   *
   */

  constructor(protected props: T) {}

  /**
   *
   */

  equals(vObject: ValueObject<T>): boolean {
    /*
     */

    if (vObject === null || vObject === undefined) {
      return false;
    }

    /*
     */

    if (vObject.props === undefined) {
      return false;
    }

    /*
     */

    return JSON.stringify(vObject.props) === JSON.stringify(this.props);
  }
}
