import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateAdminController } from './controllers/CreateAdminController';
import {  CreateAuthenticateUserController } from './controllers/CreateAuthenticateUserController';


export const routes = Router();

const createUserController = new CreateUserController();
const createAdminControlle = new CreateAdminController();
const createUserAuthenticate = new CreateAuthenticateUserController();

routes.post('/user', createUserController.handle);

routes.post('/admin', createAdminControlle.handle );

routes.post('/user/authenticate',createUserAuthenticate.handle);

