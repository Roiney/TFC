import { Request, Response } from 'express';
import leaderboardService from '../service/LeaderboardService';

export default class leaderboardController {
  constructor(private service = new leaderboardService()) { }
  public getLeaderboard = async (_req: Request, res: Response) => {
    const get = this.service.getleaderboard();
    res.status(200).json({ get });
  };
}
