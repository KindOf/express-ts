import Application from './app';
import config from './config';
import routes from './routes';

const app = new Application(config, routes);

app.start();