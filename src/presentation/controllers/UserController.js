import User from "../../business/Entities/User.js";

export default class AuthController {
    constructor(userService) {
        this.userService = userService; 
    }

    async register(req, res) {
        try {
             
            const user = new User(req.body);
            console.log("user in controller"+user.toJSON)
            const createdUser = await this.userService.createUser(user);
            
            res.status(201).json({ message: "User created", data: createdUser });

        } catch (error) {
            console.error('error in Usercontroller'+ error)
            res.status(500).json({ message: error.message });
            
        }
    }
}
