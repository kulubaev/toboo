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

import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

const { window } = new JSDOM("<!DOCTYPE html>");
const dompurify = DOMPurify(window);

export class TextUtils {
  /**
   *
   */
  static sanitize(text: string): string {
    return dompurify.sanitize(text);
  }
  /**
   *
   */
  static capitalize(text: string): string {
    /**
     *
     */
    if (text !== undefined && text.length > 0) {
      const first = text.charAt(0).toUpperCase();
      const rest = text.slice(1).toLowerCase();

      return first + rest;
    }

    return text;
  }
}
