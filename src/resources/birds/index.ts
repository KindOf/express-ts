import * as express from 'express';

import getHandler from './handlers/getHandler';
import postHandler from './handlers/postHandler';

const router = express.Router();

router
  .get('/', getHandler)
  .post('/', postHandler);

export default router;
