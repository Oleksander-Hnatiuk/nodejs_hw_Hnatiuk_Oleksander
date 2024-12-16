import { createReadStream, createWriteStream, existsSync, mkdirSync } from "fs";

import path from 'path';

import logger from "utils/logger";

const { warn } = logger("fs");

const LOG_FILE_PATH =  path.resolve('./logs/server.log'); // тут мені треба було якось вказати шлях до файла. як правильно це зробити

export const LogToFile = (chunk: string): void => {
  const logDir = path.dirname(LOG_FILE_PATH);

  if (!existsSync(logDir)) {
    mkdirSync(logDir, { recursive: true });
    warn(`Directory ${logDir} created.`);
  }

  const writeStream = createWriteStream(LOG_FILE_PATH, { flags: 'a' });
  writeStream.write(`${chunk}\n`);
  writeStream.end();
}