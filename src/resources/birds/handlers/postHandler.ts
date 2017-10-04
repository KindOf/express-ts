import {Request, Response} from 'express';

export default function postHandler(req: Request, res: Response): void {
  res.send('post birds');
}
