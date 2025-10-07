export default class User {

    constructor(id = null, fisrtName, lastName, email, password, score, emailVerified = false, kncVerified = false)
    {
        this.id = id;
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.score = score;
        this.emailVerified = emailVerified;
        this.kncVerified = kncVerified;
    }

    verifyEmail ()
    {
        if(this.emailVerified){
            throw new Error('Email aready verified')
        }
        this.emailVerified = true;
    }

    verifyKnc()
    {
        if(kncVerified){
            throw new Error('KNC aready verified ')
        }
    }

    toJSON()
    {
        return {
            "id" : this.id,
            "firstName" : this.fisrtName,
            "lastName": this.lastName,
            "email" : this.email,
            "password" : this.password,
            "score" : this.score,
            "emailVerified" : this.emailVerified,
            "kncVerified" : this.kncVerified 
        }
    }



}