import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';

interface IRouteDescription {
  path: string;
  router: express.Router;
}

export default class Application {
  private app: express.Express = express();
  constructor(
    private config: {port: number},
    private routes: IRouteDescription[],
  ) {}

  public start(): void {
    this.initMiddleware();
    this.initRoutes(this.routes);

    this.app.listen(this.config.port, 'localhost', () => {
      console.log(`Server is runing on port ${this.config.port}`);
    });
  }

  private initMiddleware() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  private initRoutes(routes) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }
}
