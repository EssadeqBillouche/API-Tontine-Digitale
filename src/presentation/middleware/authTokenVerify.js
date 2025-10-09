import jwt from "jsonwebtoken"


export function checkToken(req, res, next)
{
    const header = req.headers['authorization']
}