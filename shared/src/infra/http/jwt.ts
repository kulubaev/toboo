import jwt from "jsonwebtoken";
import { uid } from "rand-token";

import { Result, Guard } from "../..";
const { JWT_KEY, JWT_TOKEN_LONGEVITY } = process.env;

import { KeyValuePairs } from "../../core";

/**
 *
 */
export interface JWTClaims extends KeyValuePairs {}

/**
 *
 */
export type JWToken = string;

/**
 *
 */
export type RefreshToken = string;

/**
 *
 */
export type Session = string;
/**
 *
 */
export class JWT {
  /**
   *
   */
  static decodeJWT(token: string): Result<JWTClaims> {
    /**
     *
     */
    try {
      const decoded = jwt.verify(token, JWT_KEY!);

      return Result.ok(decoded! as JWTClaims);
    } catch (err: any) {
      return Result.fail(err?.message);
    }
  }

  /**
   *
   */
  static signJWT(props: JWTClaims): Result<JWToken> {
    const claims: JWTClaims = {
      id: props.id,
      email: props.email,
      roles: props.roles,
    };

    try {
      const guard = Guard.Numeric(
        JWT_TOKEN_LONGEVITY,
        "JWT:signJWT:tokenLongevity",
      );

      if (guard.isFailure) {
        /**
         * */
        return Result.fail("Non numeric value for JWT token longevity");
      }

      return Result.ok(
        jwt.sign(claims, JWT_KEY!, {
          expiresIn: Number.parseInt(JWT_TOKEN_LONGEVITY!),
        }),
      );
    } catch (error: any) {
      /**
       */
      return Result.fail(error?.message);
    }
  }
  /***
   *
   */
  static createRefreshToken(): Result<string> {
    try {
      /**
       *
       */
      return Result.ok(uid(256));
    } catch (error: any) {
      /**
       *
       */
      return Result.fail(`Failed to genrate token ${error?.message}`);
    }
  }
}
