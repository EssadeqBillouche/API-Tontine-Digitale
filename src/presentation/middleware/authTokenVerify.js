import { jwtTokenManager } from "./jwtConfig.js";

export function authTokenVerify(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                error: "unauthorized",
                message: "Access denied. No authorization header provided."
            });
        }

        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({
                success: false,
                error: "invalid_header",
                message: 'Invalid authorization header format. Expected: "Bearer <token>"'
            });
        }

        const token = parts[1];
        
        if (!token) {
            return res.status(401).json({
                success: false,
                error: "invalid_token",
                message: 'Access denied. No token provided.'
            });
        }

        const decoded = jwtTokenManager.verifyToken(token);
        
        req.user = decoded;
        
        next();
        
    } catch (error) {
        console.error('Token verification error:', error);
        
        if (error.message.includes('expired')) {
            return res.status(401).json({
                success: false,
                error: "token_expired",
                message: 'Token has expired. Please login again.'
            });
        }
        
        if (error.message.includes('Invalid token')) {
            return res.status(401).json({
                success: false,
                error: "invalid_token",
                message: 'Invalid token.'
            });
        }
        
        return res.status(500).json({
            success: false,
            error: "authentication_error",
            message: 'Internal server error during authentication.'
        });
    }
}