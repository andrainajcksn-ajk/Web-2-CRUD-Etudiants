export interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  filiere: string;
}

export interface EtudiantInput {
  nom: string;
  prenom: string;
  email: string;
  filiere: string;
}

export interface EtudiantUpdateInput {
  nom?: string;
  prenom?: string;
  email?: string;
  filiere?: string;
}