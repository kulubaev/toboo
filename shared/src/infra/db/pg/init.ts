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
import { IInitOptions } from "pg-promise";
import { Dispatcher, UniqueId } from "../../..";

import { IExtensions } from "./extension";

export const initOptions: IInitOptions<IExtensions> = {
  /**
   *
   */
  receive(event: any) {
    /**
     */
    const { command, fields, rows } = event.result;

    if (command === "INSERT" || command === "UPDATE") {
      /**
       */
      const field = fields?.find((f: any) => (f.name = "id"));

      if (field) {
        const id = rows[0]["id"];

        if (id) {
          Dispatcher.dispatchAggregateEvents(new UniqueId(id));
        }
      }
    }
  },
};
