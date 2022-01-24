import { Router } from 'express';


import AuthenticateUserService from '../service/AuthenticateUserService';


const sessionsRouter = Router();

// interface User {

//     email: string;
//     password?: string;
// }

sessionsRouter.post('/', async (request, response) => {

    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

     const   {user, token }= await authenticateUser.execute({
        email,
        password,
    });



    return response.json( {user, token} );


})

export default sessionsRouter;
