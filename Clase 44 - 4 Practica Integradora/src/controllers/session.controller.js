import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    res.send({ status: "success", message: "User registered", payload: req.user._id });
}

export const failedRegister = (req, res) => {
    res.send("failed Register");
}

export const login = (req, res) => {
    //serializedUser podrá convertirse en un DTO más adelante.
    const serializedUser = {
        id: req.user._id,
        name: `${req.user.first_name} ${req.user.last_name}`,
        role: req.user.role,
        email: req.user.email
    }
    const token = jwt.sign(serializedUser, 'CoderSecret', { expiresIn: "1h" })
    res.cookie('coderCookie', token, { maxAge: 3600000 }).send({ status: "success", payload: serializedUser });
}

export const failedLogin = (req, res) => {
    req.logger.error(req.message);
    res.send("failed Login");
}