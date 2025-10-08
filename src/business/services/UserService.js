import UserRepository from "../../persistence/repositories/UserRepository.js";
import User from "../Entities/User.js";

export default class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(user) {
        try {
            const existingUser = await this.userRepository.findUserByEmail(user.email);
            if (existingUser) {
                throw new Error("Email already exists");
            }
            await user.setHashedPassword();
            console.log('user entity from  service 1',user.toJSON())
            const createdUser = await this.userRepository.createUser(user);
            return createdUser;
        } catch (error) {

            throw new Error(`Error in UserService createUser:", ${error.message}`);
            
        }
    }
    async login(email, password)
    {
        try
        {
            const user = await this.userRepository.findUserByEmail(email);
            if(!user) throw new Error('Email not found in data base')

            const checkPass = await user.checkIfPasswordMatch(password);
            if(!checkPass) throw new Error(`password don't match : ${error.message}`)
            return user;
        }catch(error)
        {
            throw new Error(`UserService.login failed: ${error.message}`);
        }
    }
}
