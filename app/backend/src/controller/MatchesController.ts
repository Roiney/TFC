import { Request, Response } from 'express';
import matchesModel from '../database/models/MatchesModel';
import TeamModel from '../database/models/TeamModel';
import MatchesService from '../service/MatchsService';

export default class MatchesController {
  constructor(private service = new MatchesService()) { }

  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (inProgress) {
      const teste = await this.service.getAllMatchesInProgress(inProgress === 'true');
      return res.status(200).json(teste);
    } {
      const allMatches = await matchesModel.findAll({
        include: [
          { model: TeamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: TeamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
        ],
      });

      return res.status(200).json(allMatches);
    }
  };
}
