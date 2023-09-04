export default class LoginUserDTO {
    email;
    password;

    constructor(user) {
        this.email = user.email;
        this.password = user.password;

        if (!this.email || !this.password) {
            throw new Error('Missing parameters')
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))) {
            throw new Error('Invalid email')
        }

        if (this.password.length < 8) {
            throw new Error('Password too short')
        }
    }
}