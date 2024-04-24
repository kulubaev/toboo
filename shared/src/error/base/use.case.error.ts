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
   */
  constructor(
    public readonly parameter: string,
    public readonly message: string,
  ) {
    super();
  }
}
