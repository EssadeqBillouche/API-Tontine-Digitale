import bcrypt from "bcrypt";

export default class User {
    static roles = ['GroupAdmin', 'user'];

    constructor({ firstName, lastName, email, password, ...optionals}) {
        this.id = optionals.id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.score = optionals.score;
        this.emailVerified = optionals.emailVerified;
        this.kncVerified = optionals.kncVerified;
        this.role = optionals.role;
    }

    verifyEmail() {
        if (this.emailVerified) {
            throw new Error('Email already verified');
        }
        this.emailVerified = true;
    }

    verifyKnc() {
        if (this.kncVerified) { 
            throw new Error('KNC already verified');
        }
        this.kncVerified = true;
    }


    async setHashedPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async checkIfPasswordMatch(password) {
        return await bcrypt.compare(password, this.password);
    }

    toJSON() {
        return {
            firstName: this.firstName, 
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            score: this.score,
            role : this.role,
            emailVerified: this.emailVerified,
            kncVerified: this.kncVerified
        };
    }
}
