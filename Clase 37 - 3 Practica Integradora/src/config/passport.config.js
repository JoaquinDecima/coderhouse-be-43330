import passport from "passport";
import local from 'passport-local';
import userService from "../services/user.service.js";
import { createHash, isValidPassword } from "../utils.js";


const LocalStrategy = local.Strategy;

const initializePassport = async () => {
    passport.use('register', new LocalStrategy({ passReqToCallback: true, usernameField: 'email', session: false },
        async (req, email, password, done) => {
            try {
                const { first_name, last_name, birthDate, dni, gender } = req.body;
                if (!first_name || !last_name || !password || !birthDate || !dni) return done(null, false, { message: "Incomplete values" })
                //¿El usuario ya está en la base de datos?
                const exists = await userService.getBy({ email: email });
                if (exists) return done(null, false, { message: "User already exists" })
                const hashedPassword = await createHash(password);
                //Insertamos en la base
                const newUser = {
                    first_name,
                    last_name,
                    email,
                    birthDate,
                    gender,
                    dni,
                    password: hashedPassword
                }
                let result = await userService.saveUser(newUser);
                //SI TODO SALIÓ BIEN EN LA ESTRATEGIA
                return done(null, result)
            } catch (error) {
                done(error)
            }
        }))

    passport.use('login', new LocalStrategy({ usernameField: 'email', session: false }, async (email, password, done) => {
        try {
            const user = await userService.getBy({ email })
            if (!user) return done(null, false, { messages: "No user found" });
            const passwordValidation = await isValidPassword(user, password)
            if (!passwordValidation) return done(null, false, { messages: "Incorrect password" });
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        let result = await userService.getBy({ _id: id })
        return done(null, result);
    })
}

export default initializePassport;