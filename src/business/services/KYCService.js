import KYCRepository from "../../persistence/repositories/KYCRepository.js";


export default class KYCService
{
    constructor (KYCRepository)
    {
        this.KYCRepository = KYCRepository;
    }
    async verifyUser()
    {
    }
}