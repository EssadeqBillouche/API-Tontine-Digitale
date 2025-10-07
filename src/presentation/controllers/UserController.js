import UserService from "../../business/services/UserService.js";

export const register = (req, res) =>
    {
        const user = req.body;
        const UserService = new UserService;
        UserService.register(user)
    }