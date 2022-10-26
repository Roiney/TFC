import { Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardController = new LeaderboardController();

const leaderboardRouter = Router();

leaderboardRouter.get('/leaderboard/home', leaderboardController.getLeaderboard);

export default leaderboardRouter;
