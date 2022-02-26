import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import {  CreateAuthenticateUserController } from './controllers/CreateAuthenticateUserController'


export const routes = Router();

const createUserController = new CreateUserController();
const createUserAuthenticate = new CreateAuthenticateUserController();

routes.post('/user', createUserController.handle);

routes.post('/user/authenticate',createUserAuthenticate.handle)
