import { Router } from "express";
import passport from "passport";

import {
    register,
    failedRegister,
    login,
    failedLogin
} from "../controllers/session.controller.js";

const router = Router();

router.post(
    '/register',
    passport.authenticate('register',
        {
            passReqToCallback: true,
            session: false,
            failureRedirect: 'api/sessions/failedRegister',
            failureMessage: true
        }),
    register);
router.get('/failedRegister', failedRegister)
router.post('/login', passport.authenticate('login', { failureRedirect: '/api/sessions/failedLogin', session: false }), login)
router.get('/failedLogin', failedLogin)

export default router;