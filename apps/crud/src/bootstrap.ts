/* eslint-disable prettier/prettier */
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

export function bootstrapEnvironmentVariables() {
  const logger = new Logger('Bootstrap');

  logger.log(`Initializing in ${process.env.NODE_ENV ?? 'development'} mode`);
  let path = '.env';
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  if (process.env.NODE_ENV === 'test') {
    path = '.env.test';
  }

  const { parsed } = dotenv.config({ path });
  for (const key in parsed) process.env[key] = parsed[key];
}
