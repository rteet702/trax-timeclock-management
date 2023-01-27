import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { prisma } from "utils/db";
import { z } from "zod";
import { hash } from "bcrypt";

const handler: NextApiHandler = async (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    // GET Requests.
    if (request.method === "GET") {
        // get user here.
        const users = await prisma.user.findMany({});
        if (users.length > 0) {
            return response.status(200).json(users);
        } else {
            return response.status(404).json({ error: "No users found." });
        }
    }
    // POST Requests.
    else if (request.method === "POST") {
        const userData = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email,
            password: request.body.password,
        };
        const userSchema = z.object({
            firstName: z.string({ required_error: "First name is required." }),
            lastName: z.string({ required_error: "Last name is required." }),
            email: z.string({ required_error: "Email is required." }),
            password: z.string({ required_error: "Password is required." }),
        });

        const validate = userSchema.safeParse(userData);

        if (!validate) {
            return response.status(400).json(validate);
        }

        userData.password = await hash(userData.password, 10);

        const user = await prisma.user.create({ data: userData });

        return response.status(201).json({
            message: "OK.",
            user,
        });
    }
};

export default handler;
