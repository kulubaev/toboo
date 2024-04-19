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

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { NextFunction } from "connect";

import { ApiErrors, HttpError } from "../error";
import { KeyValuePairs } from "../core";

/**
 *
 */

interface UserInfo {
  id: string;
  phone: string;
  roles?: KeyValuePairs[];
}

/**
 *
 */
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserInfo;
    }
  }
}

/**
 *
 *
 */

export class Middleware {
  /**
   *
   */

  private static sendJson<T>(res: Response, code: number, payload: T): void {
    /*
     */
    res.setHeader("Content-Type", "application/json");
    res.status(code).json(payload);
  }
  /**
   *
   */
  constructor() {}

  /**
   *
   */

  static authenticate() {
    /**
     */
    return (req: Request, res: Response, next: NextFunction) => {
      /*
       */
      if (!req.currentUser) {
        /**
         *
         */
        console.log("Not authenticated");
        /*
         */
        throw new ApiErrors.NotAuthenticated();
      }

      next();
    };
  }

  /**
   *
   */
  static handleErrors() {
    /**
     *
     */
    return (error: Error, req: Request, res: Response, next: NextFunction) => {
      /**
       */
      if (error instanceof HttpError) {
        /**
         *
         */
        this.sendJson(res, error.statusCode, {
          errors: error.serialize(),
        });
      } else {
        /*
         */
        this.sendJson(res, 500, {
          errors: [{ message: `Something went awfully wrong` }],
        });
      }
    };
  }
}
