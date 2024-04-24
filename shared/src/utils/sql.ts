import pgp, { IQueryFileOptions } from "pg-promise";
import { join } from "path";

const { QueryFile } = pgp;
/**
 *
 */

export const sqfle = (file: string): any => {
  /**
   *
   */
  const options: IQueryFileOptions = {
    minify: true,
  };
  /**
   *
   */
  const queryFile = new QueryFile(file, options);

  if (queryFile.error) {
  }

  return queryFile;
};
