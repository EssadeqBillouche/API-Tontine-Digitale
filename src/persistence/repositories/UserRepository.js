import mongoose from "mongoose";
import UserModel from "../Models/UserModel.js";
import User from "../../business/Entities/User.js";


export default class UserRepository
{
    
    async findUserByEmail(email)
    {
        const UserFromDB = await UserModel.findOne({email})
        if(!UserFromDB)
            {
                return false;
            }
        return new User(UserFromDB.toObject())
    }

    async createUser(User)
    {
        try{
            const user = new UserModel
        (User.toJSON)
        return await user.save();
        }catch(err){
            
        }
    }
}