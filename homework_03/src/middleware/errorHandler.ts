import { NextFunction, Request, Response } from "express";

import logger from "utils/logger";

const { error } = logger("app");

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  error(err.message);
  res.status(500).json({error: err.message });
}