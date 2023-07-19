export const getOrders = async (req, res) => {
    res.json({ status: "success", message: "getOrders" });
}

export const getOrderById = async (req, res) => {
    res.json({ status: "success", message: "getOrderById" });
}

export const createOrder = async (req, res) => {
    res.status(201).json({ status: "success", message: "createOrder" });
}

export const resolveOrder = async (req, res) => {
    res.status(204).json({ status: "success", message: "resolveOrder" });
}