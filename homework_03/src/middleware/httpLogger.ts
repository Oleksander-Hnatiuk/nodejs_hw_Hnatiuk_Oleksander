import { Request, Response, NextFunction } from "express";


import logger from "utils/logger"
import { LogToFile } from "utils/logToFile";

const { info } = logger("app");

export const httpLogger = (req: Request, res: Response, next: NextFunction) => {
  const textToLog = `[${new Date().toISOString()}] ${req.method} ${req.url}`;
  info(textToLog);
  LogToFile(textToLog);
  next();
};
