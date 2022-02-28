import { Request, Response } from "express";
import {  CreateModuleService } from "../services/CreateModuleService";



export class CreateModuleController {

    async handle(request: Request, response: Response) {
        const { number } = request.body;

        const createModuleService = new CreateModuleService();

        const result = await createModuleService.execute({
            number
        })

        return response.json(result)
    }
}
