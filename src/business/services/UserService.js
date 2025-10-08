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
            
            console.log('user entity from  service 1'+user.toJSON())
            const createdUser = await this.userRepository.createUser(user);
            return createdUser;
        } catch (error) {
            console.error("Error in UserService createUser:", error.message);
            throw error;
        }
    }
}
