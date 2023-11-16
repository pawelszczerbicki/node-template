import {controllers} from "./context";
import {unless} from "./utils/unless";
import {errorHandler} from "./error/error.handler";
import express from "express";
import cors from "cors";
import {config} from "./utils/config";
import {auth} from "./auth/auth.middleware";
import {expressLogger} from "./utils/logger";
import {PAYMENT_WH_PATH} from "./payment/payment.controller";

export const app = express()
  .use(cors({origin}))
  .use(expressLogger)
  .use(unless([PAYMENT_WH_PATH], express.json()))
  .use(express.urlencoded({extended: true}))
  .use(unless(config.UNPROTECTED_ROUTES, auth))
  .use(controllers)
  .use(errorHandler);


