export function checkIfUserLogin(req, res, next) {
    const authHeader = req.headers['authorization'];
    
    if (authHeader) {
        const parts = authHeader.split(' ');
        
        if (parts.length === 2 && parts[0] === 'Bearer' && parts[1]) {
            return res.status(403).json({
                success: false,
                error: "already_authenticated",
                message: "You are already logged in. Please logout first."
            });
        }
    }
    
    next();
}