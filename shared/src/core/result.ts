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

export class Result<T> {
  /**
   *
   */

  constructor(
    public isSuccess: boolean,
    private _error: T | string | null,
    private _value?: T,
  ) {
    Object.freeze(this);
  }

  /**
   *
   */

  get value(): T {
    /**
     */
    if (this.isFailure) {
      throw new Error(
        " Can not get the value of an erroneous result. See errorValue instead.",
      );
    }

    return this._value!;
  }

  /**
   *
   */

  get isFailure(): boolean {
    return !this.isSuccess;
  }

  /**
   *
   */

  get error(): T {
    return this._error as T;
  }

  /**
   *
   */

  static ok<T>(value?: T): Result<T> {
    /*
     */

    return new Result<T>(true, null, value);
  }

  /**
   *
   */

  static fail<T>(error: string): Result<T> {
    /*
     */

    return new Result<T>(false, error);
  }

  /**
   *
   */

  static combine(results: Result<any>[] = []): Result<any> {
    /**
     */
    for (let result of results) {
      if (result.isFailure) return result;
    }

    return Result.ok();
  }
}
