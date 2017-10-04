import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import { RouteDescription, AppConfig } from './interfaces/index.d';

export default class Application {
  private app: express.Express = express();
  constructor(
    private config: AppConfig,
    private routes: Array<RouteDescription>
  ) {}

  public start(): void {
    this.initMiddleware();
    this.initRoutes(this.routes);

    this.app.listen(this.config.port, 'localhost', () => {
      console.log(`Server is runing on port ${this.config.port}`);
    })
  }

  private initMiddleware() {
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
    this.app.use(cookieParser());
  }

  private initRoutes(routes) {
    routes.forEach(route => {
      this.app.use(route.path, route.router);
    })
  }
}