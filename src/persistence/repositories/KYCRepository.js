import KYCVerificationModel from "../Models/KYCVerificationModel.js";
import KYCVerification from "../../business/Entities/KYCVerification.js";

export default class KYCRepository
{
    async findById(Id)
    {
        const KYCrecord = await KYCVerificationModel.findOne({__id : Id});
        if(!KYCrecord)
            {
                return false;
            }
        return new KYCVerification(KYCrecord.toObject())
    }

    saveVerification(KYCVerification)
    {
        try
        {
            const verification = new KYCVerificationModel(KYCVerification.toJson())
            verification.save();

        }catch(err)
        {
            throw new Error('problem to add this record', err);
        }

        
    }
}