/**
 *
 */

import { SessionService } from "./redis.session.service";

let sessionService: any = null;

const result = SessionService.create({
  host: process.env.REDIS_HOST!,
  password: process.env.REDIS_PASSWORD!,
});

if (result.isRight()) {
  sessionService = result.value;
}

export { sessionService, SessionService };
