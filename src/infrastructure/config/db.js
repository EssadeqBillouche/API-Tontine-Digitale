import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();

export const connectionDataBase = async ()=>
{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('db connected')
    } catch(err){
        console.error('error in connection '+ err);
    }    
}