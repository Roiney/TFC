import { Request, Response } from 'express';
import teamModel from '../database/models/TeamModel';

export default class TeamsController {
  public getAll = async (_req: Request, res: Response) => {
    const allTeams = await teamModel.findAll();
    return res.status(200).json(allTeams);
  };

  public getId = async (req: Request, res: Response) => {
    console.log('chegou');

    const { id } = req.params;
    console.log(id);

    const IdTeams = await teamModel.findOne({ where: { id } });
    return res.status(200).json(IdTeams);
  };
}
