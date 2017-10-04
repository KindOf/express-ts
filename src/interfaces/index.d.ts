import * as express from 'express';

export interface RouteDescription {
  path: string,
  router: express.Router
}

export interface AppConfig {
  port: number
}
