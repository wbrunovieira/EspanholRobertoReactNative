import { Request, Response } from 'express';

import {  AutheticateClientUseCase } from '../services/CreateUserAuthenticate'


export class CreateAuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService= new AutheticateClientUseCase();
    const result = await authenticateUserService.execute({
        email,
        password
    });

    return response.json(result);

  }
}
