import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as morgan from 'morgan';

import { IAppConfig, IRouteDescription} from './interfaces/index.d';

import { logger } from './utils/logger';

export default class Application {
  private app: express.Express = express();
  private logger = logger;
  constructor(
    private config: IAppConfig,
    private routes: IRouteDescription[],
  ) {}

  public start(): void {
    this.initMiddleware();
    this.initRoutes(this.routes);

    // 404 handler (should be the last middleware)
    this.app.use((req, res, next) => {
      res.status(404).send("Sorry can't find that!");
    });

    this.app.listen(this.config.port, 'localhost', () => {
      this.logger.info(`Server is runing on port ${this.config.port}`);
    });
  }

  private initMiddleware(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(morgan('short', this.logger.morganReqLogOption()));
  }

  private initRoutes(routes): void {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }
}
