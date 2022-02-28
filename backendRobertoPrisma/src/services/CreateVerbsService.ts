import { prisma } from "../database/prismaClient"
import AppError from "../errors/AppError";
interface ICreateVerbs{
    portuguese: string;
    spanish: string;
    id_module_from: string;
}
export class CreateVerbsService {
    async execute({ portuguese, spanish , id_module_from}:ICreateVerbs) {

        const PortugueseExists = await prisma.verbs.findFirst({
            where: {
                portuguese: {
                    equals: portuguese,
                    mode: 'insensitive',
                }
            }
        });

        if(PortugueseExists) {
            throw new AppError('palavra em portugue ja existe')
        }
        const spanishExists = await prisma.verbs.findFirst({
            where: {
                spanish: {
                    equals: spanish,
                    mode: 'insensitive',
                }
            }
        });

        if(spanishExists) {
            throw new AppError('palavra em espanhol ja existe')
        }

        const verb = await prisma.verbs.create({
            data: {
                portuguese,
                spanish,
                id_module_fromhhh
            },
        });

        return verb;
    }
}
