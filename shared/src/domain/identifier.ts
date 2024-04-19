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
export class Identifier<T> {
  /**
   *
   */

  constructor(private readonly value: T) {}

  /**
   *
   */

  equals(id?: Identifier<T>): boolean {
    /*
     */

    if (id === null || id === undefined) {
      return false;
    }

    /*
     */

    if (!(id instanceof this.constructor)) {
      return false;
    }

    return id.value === this.value;
  }

  /**
   *
   */

  toString() {
    /*
     */
    return String(this.value);
  }

  /**
   *
   */

  toValue(): T {
    /*
     */
    return this.value;
  }
}
