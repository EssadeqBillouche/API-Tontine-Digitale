import mongoose from "mongoose";

const UserSchema = new mongoose.Schema
({
    "firstName" : {type : String, required : true},
    "lastName" : {type : String, required : true},
    "email" : {type : String, required : true},
    "password" : {type : String, required: true},
    "score" : {type : Number, required : true},
    "emailVerified" : {type : Boolean, reuired : true},
    "kncVerified" : {type : Boolean, required : true},
    "role" : {type : String, required : true}

});

const UserModel = new mongoose.model('User', UserSchema);
export default UserModel;