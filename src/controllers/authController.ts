import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secretParDefaut';

const utilisateurTest = {
  username: 'admin',
  password: '1234',
};

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username !== utilisateurTest.username || password !== utilisateurTest.password) {
    res.status(401).json({ error: 'Identifiants incorrects' });
    return;
  }
  const token = jwt.sign({ username: username }, JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token: token });
};