import jwt from "jsonwebtoken";
import { uid } from "rand-token";

import { Guard, Either, left, right } from "../..";
import { DomainErrors } from "../..";

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
export type JWTResult<T> = Either<
  | DomainErrors.TokenSigningFailed
  | DomainErrors.TokenExtractionFailed
  | DomainErrors.RefreshTokenCannotBeIssued,
  T
>;

export class JWT {
  /**
   *
   */
  static decodeJWT(token: string): JWTResult<JWTClaims> {
    /**
     *
     */
    try {
      const decoded = jwt.verify(token, JWT_KEY!);

      return right(decoded! as JWTClaims);
    } catch (error: any) {
      /**
       *
       */
      return left(
        new DomainErrors.TokenExtractionFailed(token, error?.message),
      );
    }
  }

  /**
   *
   */
  static signJWT(props: JWTClaims): JWTResult<JWToken> {
    const claims: JWTClaims = {
      id: props.id,
      email: props.email,
      roles: props.roles,
    };

    try {
      const nanGuard = Guard.Numeric(
        JWT_TOKEN_LONGEVITY,
        "JWT:signJWT:tokenLongevity",
      );

      if (nanGuard.isFailure) {
        return left(
          new DomainErrors.InvalidData(
            "JWT:signJWT:tokenLongevity",
            nanGuard.error!.toString(),
          ),
        );
      }

      return right(
        jwt.sign(claims, JWT_KEY!, {
          expiresIn: Number.parseInt(JWT_TOKEN_LONGEVITY!),
        }),
      );
    } catch (error: any) {
      /**
       *
       */
      return left(new DomainErrors.TokenSigningFailed(claims, error?.message));
    }
  }
  /***
   *
   */
  static createRefreshToken(): JWTResult<string> {
    try {
      /**
       *
       */
      return right(uid(256));
    } catch (error: any) {
      /**
       *
       */

      return left(new DomainErrors.RefreshTokenCannotBeIssued(error?.message));
    }
  }
}
