import { Request, Response } from 'express';
import matchesModel from '../database/models/MatchesModel';
import TeamModel from '../database/models/TeamModel';

export default class MatchesController {
  public getAll = async (_req: Request, res: Response) => {
    const allMatches = await matchesModel.findAll({
      include: [
        { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return res.status(200).json(allMatches);
  };
}
