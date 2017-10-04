import {Request, Response} from 'express';

export default function getHandler(req: Request, res: Response): void {
  res.send('get birds');
}
