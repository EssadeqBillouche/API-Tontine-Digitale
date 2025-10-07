import bcrypt from "bcrypt"
export default class User {
    static roles = ['admin', 'user'];

    constructor({id = null, fisrtName, lastName, email, password, score, emailVerified = false, kncVerified = false})
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
        this.kncVerified = true;
    }

    setRole(role)
    {
        if(!User.roles.includes(role))
        {
            throw new Error('This role not allowed')
        }
        this.role = role;
    }

    async setHashedPassword()
    {
        this.password = await bcrypt.hash(this.password, 10);
    }
    async checkIfPasswordMatch(password)
    {
        return await bcrypt.compare(password, this.password);
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