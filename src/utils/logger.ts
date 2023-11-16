import {createLogger, format, transports} from "winston";
import {logger as expressWinston} from 'express-winston'

import {config} from "./config";

export const logger = createLogger({
  defaultMeta: {app: "template"},
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        format.json(),
        format.errors({stack: true}),
      ),
    }),
  ],
  exitOnError: false,
  level: config.LOG_LEVEL,
  silent: process.env.NODE_ENV === "test",
});

export const expressLogger = expressWinston(logger)