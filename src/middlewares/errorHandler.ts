import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({ error: `Route ${req.originalUrl} introuvable` });
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Erreur interne du serveur';
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  console.error(err);
  res.status(statusCode).json({ error: message });
};