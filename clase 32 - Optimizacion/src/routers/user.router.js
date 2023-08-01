import { Router } from "express";
import CustomErrors from "../tools/CustomErrors.js";
import { generateUserErrorInfo } from "../tools/info.js";
import EErros from "../tools/EErrors.js";

const userRouter = Router();
const users = [];

userRouter.get('/', (req, res) => {
    res.send({ status: "success", payload: users });
});

userRouter.post('/', (req, res) => {
    const { name, lastname, email } = req.body;

    if (!name || !lastname || !email) {
        CustomErrors.createError("Users Creation Error", generateUserErrorInfo({ name, lastname, email }), "Error en datos al crear el usuario", EErros.INVALID_TYPE);
    }

    const user = { name, lastname, email };
    users.push(user);

    res.status(201).send({ status: "success", payload: user });
});

export default userRouter;