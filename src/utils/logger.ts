import {
  Logger,
  LoggerInstance,
  transports,
} from 'winston';

export const logger: LoggerInstance = new Logger({
  transports: [
    new transports.Console({
      colorize: true,
    }),
  ],
});
