import { Request, Response, NextFunction } from 'express';
import * as service from '../service/etudiantService';

export const getAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(service.getAll());
  } catch (err) { next(err); }
};

export const getById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    res.status(200).json(service.getById(id));
  } catch (err) { next(err); }
};

export const create = (req: Request, res: Response, next: NextFunction) => {
  try {
    const etudiant = service.createEtudiant(req.body);
    res.status(201).json(etudiant);
  } catch (err) { next(err); }
};

export const update = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    res.status(200).json(service.updateEtudiant(id, req.body));
  } catch (err) { next(err); }
};

export const remove = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    service.deleteEtudiant(id);
    res.status(204).send();
  } catch (err) { next(err); }
};