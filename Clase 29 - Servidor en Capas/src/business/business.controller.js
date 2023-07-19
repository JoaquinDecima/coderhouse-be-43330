export const getBusiness = async (req, res) => {
    res.json({ status: "success", message: "getBusiness" });
}

export const getBusinessById = async (req, res) => {
    res.json({ status: "success", message: "getBusinessById" });
}

export const createBusiness = async (req, res) => {
    res.status(201).json({ status: "success", message: "createBusiness" });
}

export const addProduct = async (req, res) => {
    res.status(204).json({ status: "success", message: "addProduct" });
}