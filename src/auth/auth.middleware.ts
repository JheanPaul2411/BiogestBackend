// auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req['id'] = decoded;
        next();
      } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
      }
    } else {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }
  }
}
