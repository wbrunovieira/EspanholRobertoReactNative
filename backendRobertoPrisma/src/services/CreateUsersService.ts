import { prisma } from "../database/prismaClient"
import { hash } from 'bcryptjs';
import AppError from "../errors/AppError";
prisma

interface ICreateUser {
    name: string;
    email: string;
    password: string;
    avatar?: string | null ;

}
export class CreateUserService {
    async execute({ name, email, password }:ICreateUser) {

        const emailExists = await prisma.users.findFirst({
            where: {
               email: {
                   equals: email,
                   mode: 'insensitive',
               }
            },
        });

        if(emailExists) {
            throw new AppError('email ja existe !')
        }

        const hashedPassword = await hash(password, 10);

        const user = await prisma.users.create({
            data: {
                name,
                email,
                password:hashedPassword,
            },
        });

        return user;


    }
}
