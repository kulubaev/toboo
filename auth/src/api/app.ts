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

import { app, Middleware, ApiErrors } from "@toboo/shared";
import { router } from "./http";

app.use(router);

/**
 *
 */

app.all("*", async () => {
  throw new ApiErrors.NotFound();
});

/**
 *
 */
app.use(Middleware.handleErrors());

export { app };
