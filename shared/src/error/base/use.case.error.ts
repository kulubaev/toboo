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

export abstract class UseCaseError extends Error {
  /**
   *
   */

  abstract Parameter: string;

  /**
   */
  constructor(
    public readonly parameter: string,
    public readonly message: string,
  ) {
    super();
    this.parameter = parameter;
  }
}
