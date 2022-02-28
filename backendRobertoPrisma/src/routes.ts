import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateAdminController } from './controllers/CreateAdminController';
import {  CreateAuthenticateUserController } from './controllers/CreateAuthenticateUserController';
import {  CreateAuthenticateAdminController } from './controllers/CreateAuthenticateAdminController';
import { CreateModuleController  } from './controllers/CreateModuleController'
import { ensureAuthenticateAdmin } from './middlewares/ensureAuthenticateAdmin';
import {  FindAllUsersController} from './controllers/FindAllUsersController';

export const routes = Router();

const createUserController = new CreateUserController();
const createAdminControlle = new CreateAdminController();
const createUserAuthenticate = new CreateAuthenticateUserController();
const createAdminAuthenticate = new CreateAuthenticateAdminController();
const createModuleController = new CreateModuleController();
const findAllUsers = new FindAllUsersController();

routes.post('/user', createUserController.handle);

routes.post('/admin', createAdminControlle.handle );
routes.get('/admin/users', ensureAuthenticateAdmin,findAllUsers.handle );

routes.post('/user/authenticate',createUserAuthenticate.handle);
routes.post('/admin/authenticate',createAdminAuthenticate.handle);

routes.post('/module', ensureAuthenticateAdmin ,createModuleController.handle);
