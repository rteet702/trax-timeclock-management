import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

const handler: NextApiHandler = (
    request: NextApiRequest,
    response: NextApiResponse
) => {
    // GET Requests.
    if (request.method === "GET") {
        response.status(500).json({ message: "Not Implemented yet." });
    }
    // POST Requests.
    else if (request.method === "POST") {
        response
            .status(201)
            .json({
                message: "OK, not actually implemented yet.",
                user: request.body,
            });
    }
};

export default handler;
