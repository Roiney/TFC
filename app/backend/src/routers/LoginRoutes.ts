import { Router } from 'express';
import authentication from '../middlewares/authentication';

const loginRouter = Router();

loginRouter.post('/login', authentication);

export default loginRouter;
