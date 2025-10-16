import KYCRepository from "../../persistence/repositories/KYCRepository.js";


export default class KYCService
{
    constructor ()
    {
        this.KYCRepository = new KYCRepository();
    }
    async verifyUser()
    {
    }
}