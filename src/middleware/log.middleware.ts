import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const requestQuery = req.query;
    const requestBody = req.body;

    Logger.log('Query: ' + JSON.stringify(requestQuery));
    Logger.log('Body: ' + JSON.stringify(requestBody));
    next();
  }
}
