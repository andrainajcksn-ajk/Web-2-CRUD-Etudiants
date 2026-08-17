import * as repo from '../repository/etudiantRepository';
import { AppError } from '../middlewares/AppError';
import { Etudiant, EtudiantInput, EtudiantUpdateInput } from '../models/Etudiant';

export const getAll = (): Etudiant[] => {
  return repo.findAll();
};

export const getById = (id: number): Etudiant => {
  const etudiant = repo.findById(id);
  if (!etudiant) {
    throw new AppError(`Étudiant avec l'id ${id} introuvable`, 404);
  }
  return etudiant;
};

export const createEtudiant = (data: EtudiantInput): Etudiant => {
  if (!data.nom || !data.prenom || !data.email) {
    throw new AppError('nom, prenom et email sont obligatoires', 400);
  }
  return repo.create(data);
};

export const updateEtudiant = (id: number, data: EtudiantUpdateInput): Etudiant => {
  const updated = repo.update(id, data);
  if (!updated) {
    throw new AppError(`Étudiant avec l'id ${id} introuvable`, 404);
  }
  return updated;
};

export const deleteEtudiant = (id: number): void => {
  const ok = repo.remove(id);
  if (!ok) {
    throw new AppError(`Étudiant avec l'id ${id} introuvable`, 404);
  }
};