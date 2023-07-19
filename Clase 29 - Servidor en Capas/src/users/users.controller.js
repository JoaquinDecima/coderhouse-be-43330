export const getUsers = async (req, res) => {
    res.json({ status: "success", message: "getUsers" });
};
export const getUserById = async (req, res) => {
    res.json({ status: "success", message: "getUsers" });
};
export const createUser = async (req, res) => {
    res.status(201).json({ status: "success", message: "getUsers" });
};