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

import { Response, Request } from "express";
import { ApiErrors } from "../error";
import { nil } from "../core";

type Failure =
  | ApiErrors.UnexpectedHalt
  | ApiErrors.NotFound
  | ApiErrors.NotAuthenticated
  | ApiErrors.BadRequest
  | ApiErrors.NotAuthorized;

export abstract class Controller {
  /**
   *
   */

  private sendJson<T>(res: Response, code: number, payload: T): void {
    /*
     */
    res.setHeader("Content-Type", "application/json");
    res.status(code).json(payload);
  }
  /**
   *
   */

  protected ok<T>(res: Response, payload?: T): void {
    /*
     */

    if (payload) {
      /*
       */

      return this.sendJson<T>(res, 200, payload);
    }

    res.sendStatus(204);

    return nil;
  }

  /**
   *
   */

  protected failed(res: Response, failure: Failure): void {
    /*
     */
    this.sendJson(res, failure.statusCode, { message: failure.message });
  }

  /*
   *
   */

  protected abstract executing(req: Request, res: Response): Promise<void>;
}
