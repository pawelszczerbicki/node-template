import {NextFunction, Request, Response} from "express";
import {ErrorCodes} from "./error.codes";
import {logger} from "../utils/logger";

interface AppError extends Error {
  status?: number;
  code?: string;
  details?: string
}

export class ValidationError implements AppError {
  status = 400
  message = "Validation error"
  name = "Validation"

  constructor(public code: string, public details?: string) {
  }
}

export class AccessForbiddenError implements AppError {
  status = 403
  code = ErrorCodes.UNAUTHORIZED
  message = "Access forbidden"
  name = "Forbidden"

  constructor(public details?: string) {
  }
}

interface ErrorHandler {
  (
    error: AppError,
    request: Request,
    response: Response,
    next: NextFunction
  ): void;
}

export const errorHandler: ErrorHandler = (
  error: AppError,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  logger.error("Error", error);
  if (error.status)
    return response.status(error.status).json({code: error.code, message: error.message});
  response.status(500).json({code: ErrorCodes.INTERNAL_SERVER_ERROR});
};
