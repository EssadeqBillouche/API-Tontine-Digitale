import mongoose, { now } from "mongoose";

const KYCVerificationSchema = new mongoose.Schema({
    'userId' : {type : mongoose.Schema.Types.ObjectId, ref : 'User', require : true},
    'nationalIdPicture' : {type : String, require : true},
    'status' : {type : String, enum : ['Pending', 'Approved', 'Rejected', 'NeedManualReview'],},
    'verifiedBy' : {type : mongoose.Schema.Types.ObjectId, ref : 'User', require : false},
    "verifiedAt" : {type : Date},
    "submittedAt": {type : Date, default : Date.now}
});

export default mongoose.model('KYCVerification', KYCVerificationSchema)