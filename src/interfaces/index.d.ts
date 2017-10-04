import * as express from 'express';

export interface IRouteDescription {
  path: string,
  router: express.Router
}

export interface IAppConfig {
  port: number,
  stage: string,
}
