import { Request, Response } from 'express';
import teamModel from '../database/models/TeamModel';

export default class TeamsController {
  public getAll = async (req: Request, res: Response) => {
    const allTeams = await teamModel.findAll();
    return res.status(200).json(allTeams);
  };
}
