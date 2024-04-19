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

import { UniqueId } from "./unique.id";

export abstract class Entity<T> {
  /*
   */

  protected readonly _id: UniqueId;

  /*
   *
   */

  constructor(
    public readonly props: T,
    id?: UniqueId,
  ) {
    this._id = id || new UniqueId();
  }

  /*
   *
   */
  static isEntity(e: any): e is Entity<any> {
    return e instanceof Entity;
  }

  /*
   *
   */

  equals(entity?: Entity<T>): boolean {
    /*
     */

    if (entity === null || entity === undefined) {
      return false;
    }

    /*
     */

    if (!Entity.isEntity(entity)) {
      return false;
    }

    /*
     */

    if (this === entity) {
      return true;
    }

    /*
     */

    return this._id.equals(entity._id);
  }
}
