import {    Router } from 'express';

import usersRouter from './users.route';
import sessionsRouter from './session.route';

const routes = Router();


routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
