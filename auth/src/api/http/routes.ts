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

import express, { Request, Response } from "express";
import { getUserApi, createUserApi } from "../../use.case";

const router = express.Router();

/**
 */
router.post("/signup", (req: Request, res: Response) => {
  createUserApi.execute(req, res);
});
/**
 */
router.post("/signin", (req: Request, res: Response) => {});
/**
 */
router.post("/signout", (req: Request, res: Response) => {});
/**
 */
router.post("/signin/new_token", (req: Request, res: Response) => {});
/**
 */
router.get("/users/:id", (req: Request, res: Response) => {
  getUserApi.execute(req, res);
});

export { router };
