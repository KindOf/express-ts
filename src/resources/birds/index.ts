import * as express from 'express';

import getHandler from './handlers/getHandler';
import postHandler from './handlers/postHandler';

let router = express.Router();

router
  .get('/', getHandler)
  .post('/', postHandler);

export default router;