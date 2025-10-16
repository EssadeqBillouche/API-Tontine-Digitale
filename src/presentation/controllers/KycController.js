import KYCService from "../../business/services/KYCService.js"

export default class KycController
{
    constructor (KYCService)
    {
        this.KYCService = KYCService;
    } 
}