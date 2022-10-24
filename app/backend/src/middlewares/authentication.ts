import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import UserService from '../service/UserService';

const service = new UserService();

async function authentication(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const login = await service.findEmail(email);

  if (!login) return res.status(401).json({ message: 'Incorrect email or password' });

  const isPasswordValid = await compare(password, login.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  res.status(200).json({ message: 'ate aqui' });
}

export default authentication;
