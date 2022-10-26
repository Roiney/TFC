import { Request, Response } from 'express';
import teamModel from '../database/models/TeamModel';
import TeamsServive from '../service/TeamsService';

export default class TeamsController {
  constructor(private service = new TeamsServive()) { }

  public getAll = async (_req: Request, res: Response) => {
    const allTeams = await teamModel.findAll();
    return res.status(200).json(allTeams);
  };

  public getId = async (req: Request, res: Response) => {
    const { id } = req.params;

    const IdTeams = await this.service.getTeamById(id);
    return res.status(200).json(IdTeams);
  };
}
