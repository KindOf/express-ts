import * as express from 'express';
import { Options } from 'morgan';
import { LoggerInstance } from 'winston';

export interface IRouteDescription {
  path: string,
  router: express.Router
}

export interface IAppConfig {
  port: number,
  stage: string,
}

export interface ICustomLoggerInstance extends LoggerInstance {
  logApiInvocation: (message: string) => void;
  morganReqLogOption: () => Options;
}