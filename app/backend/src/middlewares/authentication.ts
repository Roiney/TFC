import { Request, Response } from 'express';
import userService from 'src/services/userService';

const service = new userService();

async function autenticate(request: Request, response: Response) {
  const { email, password } = request.body;

  if (!email, !password) {
    return response.status(400).json({ message: 'All fields must be filled' });
  }

  const user = await service.findEmail(email);

  if (!user) return response.status(401).json({ message: 'Incorrect email or password' });
}

export default autenticate;
