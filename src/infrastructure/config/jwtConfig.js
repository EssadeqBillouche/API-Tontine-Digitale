import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config();


export  const jwtTokenManager =
{
    generateToken(payload)
    {
        return jwt.sign(payload, process.env.JWT_KEY, {expiresIn : '24h' });
    },

    verifyToken(token)
    {
        try{
            return jwt.verify(token, process.env.JWT_KEY)
        }catch(error)
        {
            throw new Error(`error with tokent verification : ${error}`);
        }
    }
}
