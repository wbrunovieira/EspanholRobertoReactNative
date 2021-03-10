import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Nasceu o mundo espanhol' }));

export default routes;
