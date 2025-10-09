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
    async login(req, res)
    {
        try
        {
            const {email, password} = req.body;
            const token = await this.userService.login(email, password);
            console.log("check user entity from controller :", token);
            
            res.status(200).json({ message : "login success", token})
        }
        catch(error)
        {
            res.status(404).json({message : error.message})
        }
    }
}
