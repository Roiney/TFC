import { ok } from 'assert';
import { Request, Response } from 'express';

async function authentication(req: Request, res: Response) {
  const { email, password } = req.body;
  console.log('chegou');

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  res.status(200).json({ teste: ok });
}

export default authentication;
