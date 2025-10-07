import UserRepository from "../../persistence/repositories/UserRepository.js";
import User from "../Entities/User.js";

export default class UserService 
{
    constructor (UserRepository)
    {
        this.UserRepository = UserRepository;
    }

    createUser(User)
    {
        const UserRepository = new this.UserRepository;

        const user = UserRepository.findUserByEmail(User.email);

        if(user)
            {
                throw new Error('Email Linked to another account');
            }
        return UserRepository.createUser(User);
    }

}