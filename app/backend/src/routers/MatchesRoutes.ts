import { Router } from 'express';
import MatchesController from '../controller/MatchesController';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get('/matches', matchesController.getAll);

export default matchesRouter;
