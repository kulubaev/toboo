import { sqfle } from "@toboo/shared";
import path from "path";
import { fileURLToPath } from "url";

import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
 *
 */

export const sql = {
  /**
   *
   */
  user: {
    find_one: sqfle(join(__dirname, "user/find.one.sql")),
    find_email: sqfle(join(__dirname, "user/find.email.sql")),
    add_one: sqfle(join(__dirname, "user/add.one.sql")),
  },
};
