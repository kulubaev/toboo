/**
 *
 */

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

import { uuidv7 } from "uuidv7";
import pgPromise, { IDatabase, IMain } from "pg-promise";

import { newDb, DataType, IMemoryDb } from "pg-mem";

import { KeyValuePairs } from "../../..";

import { IExtensions } from "./extension";
import { initOptions } from "./init";

/**
 *
 */

const {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_PORT,
  NODE_ENV,
} = process.env;

type ExtendedPrototocol = IDatabase<IExtensions> & IExtensions;
/**
 *
 */

const pgp: IMain = pgPromise(initOptions);
let pgdb: ExtendedPrototocol;
let db: IMemoryDb;

if (
  process.env.JEST_WORKER_ID !== undefined ||
  process.env.NODE_ENV === "test"
) {
  (async () => {
    db = newDb();

    db.public.registerFunction({
      name: "uuid_generate_v7",
      returns: DataType.uuid,
      implementation: () => uuidv7(),
    });

    pgdb = await db.adapters.createPgPromise();
    await pgdb.connect();
  })();
} else {
  /**
   */
  const pgCredentials: KeyValuePairs = {
    development: {
      database: POSTGRES_DB,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      port: POSTGRES_PORT,
      host: POSTGRES_HOST,
    },

    production: {
      database: POSTGRES_DB,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      port: POSTGRES_PORT,
      host: POSTGRES_HOST,
    },
  };

  /**
   *
   */

  const { username, database, password, host, port } =
    pgCredentials[NODE_ENV || "development"];

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

  pgdb = pgp({
    database: database?.toString(),
    user: username?.toString(),
    password: password?.toString(),
    port: port?.toString(),
    host: host?.toString(),
  });
}

export { pgp, pgdb, db };
