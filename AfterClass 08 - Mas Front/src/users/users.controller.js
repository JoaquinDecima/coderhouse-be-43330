import User from "./users.dao.js";

const userService = new User();

export const getUsers = async (req, res) => {
    const users = await userService.getUsers()

    if(!users) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.json({ status: "success", payload: users });
};

export const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await userService.getUserById(id);

    if(!user) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.json({ status: "success", payload: user });
};

export const createUser = async (req, res) => {
    const body = req.body;
    const user = await userService.createUser(body);

    if(!user) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.status(201).json({ status: "success", payload: user });
};