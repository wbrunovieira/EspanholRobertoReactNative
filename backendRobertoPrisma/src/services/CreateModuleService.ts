import { prisma } from "../database/prismaClient"
import AppError from "../errors/AppError";
interface ICreateModule {
    number: string;
}
export class CreateModuleService {
    async execute({ number }:ICreateModule) {

        const moduleExists = await prisma.modules.findFirst({
            where: {
                number: {
                    equals: number,
                    mode: 'insensitive',
                }
            }
        });

        if(moduleExists) {
            throw new AppError('modulo ja existe')
        }

        const module = await prisma.modules.create({
            data: {
               number

            },
        });

        return module;
    }
}
