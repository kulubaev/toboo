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

import express from "express";
import "express-async-errors";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import { Middleware } from ".";

const app = express();

app.set("trust proxy", true);

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: "*",
  }),
);
app.use(Middleware.handleErrors());
app.use(morgan("tiny"));

export { app };
