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

export interface UseCase<Request, Response> {
  execute(req?: Request): Promise<Response> | Response;
}
