import {HEALTH_PATH} from "../health/health.controller";

export const config = {
  PORT: process.env.port,
  DB_URL: process.env.DB_URL,
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  UNPROTECTED_ROUTES: [HEALTH_PATH],
  MESSAGING_DESTINATION: process.env.MESSAGING_DESTINATION,
  MESSAGING_SOURCE: process.env.MESSAGING_SOURCE
}