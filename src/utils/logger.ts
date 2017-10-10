import { ICustomLoggerInstance } from './../interfaces/index.d';

import {
  Logger,
  LoggerInstance,
  LoggerOptions,
  transports,
} from 'winston';

export class CustomLogger extends Logger {
  constructor(options: LoggerOptions) {
    super(options);
  }

  public logApiInvocation(message) {
    this.warn(message);
  }

  public morganReqLogOption() {
    return {
      stream: {
        write: (message) => {
          this.logApiInvocation(message);
        },
      },
    };
  }
}

export const logger: ICustomLoggerInstance = new CustomLogger({
  transports: [
    new transports.Console({
      colorize: true,
    }),
  ],
});
