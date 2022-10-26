import { NextFunction, Request, Response } from 'express';
import decodeToken from '../utilis/decodeToken';

const autentication = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token must be a valid token' });

  const token = authorization.replace('Bearer ', '');

  try {
    decodeToken(token);
  } catch {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default autentication;
