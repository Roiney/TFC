import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';

export default class leaderboardController {
  constructor(private service = new LeaderboardService()) { }

  public getLeaderboard = async (_req: Request, res: Response) => {
    const get = await this.service.getleaderboard();

    res.status(200).json(get);
  };
}
