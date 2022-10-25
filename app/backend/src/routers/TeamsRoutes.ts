import { Router } from 'express';
import TeamsController from '../controller/TeamsController';

const teamsRouter = Router();
const teamsController = new TeamsController();

teamsRouter.get('/teams', teamsController.getAll);
teamsRouter.get('/teams/:id', teamsController.getId);

export default teamsRouter;
