import { Router } from 'express';
import MatchesController from '../controller/MatchesController';
import autentication from '../middlewares/autentication';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get('/matches', matchesController.getAll);
matchesRouter.post('/matches', autentication, matchesController.insertMatches);
matchesRouter.patch('/matches/:id/finish', matchesController.changeProgess);

export default matchesRouter;
