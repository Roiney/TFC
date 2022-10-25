import { Router } from 'express';
import authentication from '../middlewares/authentication';
import UserController from '../controller/UserController';

const loginRouter = Router();
const userController = new UserController();

loginRouter.post('/login', authentication);
loginRouter.get('/login/validate', userController.getRole);

export default loginRouter;
