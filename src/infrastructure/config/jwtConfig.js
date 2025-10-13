import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const jwtTokenManager = {
    generateToken(payload) {
        return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '24h' });
    },

    verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_KEY);
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new Error('Token has expired'+ error);
            } else if (error.name === 'JsonWebTokenError') {
                throw new Error('Invalid token');
            } else {
                throw new Error(`Token verification failed: ${error.message}`);
            }
        }
    }
};