/**
 *
 *
 */

import formidable, {
  Files,
  Fields,
  errors as formidableErrors,
} from "formidable";
import { Request } from "express";
import { Buffer } from "node:buffer";
import { Writable } from "node:stream";
import { Result } from "../core";

export class FormDataParser {
  static async parse<FieldKey extends string, FileKey extends string>(
    req: Request,
  ): Promise<Result<[Fields<FieldKey>, Files<FileKey>, any]>> {
    try {
      //  const [fields, files] = await Parser.form.parse(req);

      let data: any;

      const form = formidable({
        // 10mb
        maxFileSize: 10 * 1024 * 1024,
        allowEmptyFiles: false,
        multiples: true,
        fileWriteStreamHandler: (file) => {
          data = {};
          const chunks: any[] = [];

          const writable = new Writable({
            write(chunk, enc, next) {
              chunks.push(chunk);
              next();
            },
            destroy() {},
            final(cb) {
              const buffer = Buffer.concat(chunks);
              // if filename option is not provided file.newFilename will be a random string
              /*eslint-disable */
              data = buffer;
              cb();
            },
          });
          return writable;
        },
      });

      const [fields, files] = await form.parse(req);
      return Result.ok<[Fields<FieldKey>, Files<FileKey>, any]>([
        fields,
        files,
        data,
      ]);
    } catch (error: any) {
      console.log(error);
      /**
       *
       */
      return Result.fail(error?.code);
    }
  }
}
