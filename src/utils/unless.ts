import { AppMiddleware } from "../types";

export const unless =
  (path: string[], mid: AppMiddleware): AppMiddleware =>
  (req, res, next) =>
    path.some((p) => p === req.path) ? next() : mid(req, res, next);
