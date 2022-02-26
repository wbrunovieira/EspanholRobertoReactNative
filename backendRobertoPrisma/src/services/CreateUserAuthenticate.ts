import { prisma } from "../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import AppError from "../errors/AppError";

interface IAuthenticateUser {

    email: string;
    password: string;
}
export class AutheticateClientUseCase {
    async execute({ email, password }:IAuthenticateUser) {

        const user = await prisma.users.findFirst({
            where: {
                email
            }
        })

        if(!user) {
            throw new AppError("email or password invalid.")
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Username or password invalid.")
        }

        const token = sign({ email }, "c0988d02440325fccab5405e5c628d9f",{
            subject: user.user_id,
            expiresIn:"1d"
        })

        return token;


    }

}
