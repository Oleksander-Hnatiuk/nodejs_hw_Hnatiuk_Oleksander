import config from "config";
import "dotenv/config";
import express from "express";

import {
  httpLogger, 
  globalErrorHandler
} from "middleware";

import baseRouter from "server/routes/base";
import logger from "utils/logger"

const { warn } = logger("app");

const app = express();
// const PORT: number = config.get("app.port");
// const HOSTNAME: string = config.get("app.hostname");

app.use(express.json());

app.use(httpLogger);

app.use(baseRouter);

app.use(globalErrorHandler)


// Start the server
app.listen(3000, 'localhost', () => {
  warn(`Server is running on http://${'localhost'}:${3000}`);
});