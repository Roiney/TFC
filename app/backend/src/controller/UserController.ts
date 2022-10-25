import { Request, Response } from 'express';
import UserService from '../service/UserService';

export default class UserController {
  constructor(private service = new UserService()) { }

  public getRole = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    console.log('chegou aqui');

    if (!authorization) {
      return res.status(401).json({ message: 'unauthorized' });
    }
    const token = authorization.replace('Bearer ', '');
    console.log(token);

    const role1 = this.service.getRole(token as string);
    console.log(role1);

    const teste = { role: role1 };

    return res.status(200).json(teste);
  };
}
