import { Etudiant, EtudiantInput, EtudiantUpdateInput } from '../models/Etudiant';

let etudiants: Etudiant[] = [];
let nextId = 1;

export const findAll = (): Etudiant[] => {
  return etudiants;
};

export const findById = (id: number): Etudiant | undefined => {
  return etudiants.find((e) => e.id === id);
};

export const create = (data: EtudiantInput): Etudiant => {
  const nouvelEtudiant: Etudiant = {
    id: nextId,
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    filiere: data.filiere,
  };
  nextId = nextId + 1;
  etudiants.push(nouvelEtudiant);
  return nouvelEtudiant;
};

export const update = (id: number, data: EtudiantUpdateInput): Etudiant | null => {
  const etudiant = findById(id);
  if (!etudiant) {
    return null;
  }
  if (data.nom !== undefined) etudiant.nom = data.nom;
  if (data.prenom !== undefined) etudiant.prenom = data.prenom;
  if (data.email !== undefined) etudiant.email = data.email;
  if (data.filiere !== undefined) etudiant.filiere = data.filiere;
  return etudiant;
};

export const remove = (id: number): boolean => {
  const index = etudiants.findIndex((e) => e.id === id);
  if (index === -1) {
    return false;
  }
  etudiants.splice(index, 1);
  return true;
};