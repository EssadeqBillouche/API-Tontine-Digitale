import jwt from "jsonwebtoken"


export function authTokenVerify(req, res, next)
{
    const authheader = req.headers['authorization'];
    if (authheader)
        {
            token = authheader.split(" ")[1];
        }

    
}