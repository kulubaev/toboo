import { app } from "./api";

const start = async () => {
  try {
    /**
     *
     */
    if (!process.env.SESSION_MAX_AGE) {
      throw new Error("SESSION_MAX_AGE must be defined");
    }

    /*
     */
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_Key must be defined");
    }
    /*
     */
    if (!process.env.JWT_TOKEN_LONGEVITY) {
      throw new Error("JWT_Key must be defined");
    }
    /*
     */
    if (!process.env.REDIS_HOST) {
      throw new Error("REDIS_HOST must be defined");
    }
    /*
     */
    if (!process.env.REDIS_PASSWORD) {
      throw new Error("REDIS_PASSWORD must be defined");
    }
    /**
     *
     */
  } catch (exp: any) {}
};

app.listen(5000, () => {
  console.log("auth service listening on port 5000");
});

start();
