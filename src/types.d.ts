import { NextFunction, Request, Response } from "express";

export interface AppMiddleware {
  (request: Request, response: Response, next: NextFunction): void;
}
