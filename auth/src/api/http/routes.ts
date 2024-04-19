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

const router = express.Router();

/**
 */
router.post("/signup", (req: Request, res: Response) => {});
/**
 */
router.post("/signin", (req: Request, res: Response) => {});
/**
 */
router.post("/signout", (req: Request, res: Response) => {});
/**
 */
router.post("/signin/new_token", (req: Request, res: Response) => {});

export { router };
