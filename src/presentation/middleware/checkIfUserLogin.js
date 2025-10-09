export function checkIfUserLogin(req, res, next)
{
    const jwtheader = req.headers['authorization'];
    if(header)
        {
            return res.status(401).json({error : "forbiden", message : "You aredy logIn" })
        }
    next();
}