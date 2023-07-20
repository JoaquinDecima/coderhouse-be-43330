import Business from "./business.dao.js";

const businessService = new Business();
export const getBusiness = async (req, res) => {
    const business = await businessService.getBusiness()

    if(!business) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.json({ status: "success", payload: business });
}

export const getBusinessById = async (req, res) => {
    const id = req.params.id;
    const business = await businessService.getBusinessById(id);

    if(!business) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.json({ status: "success", payload: business });
}

export const createBusiness = async (req, res) => {
    const body = req.body;
    const business = await businessService.createBusiness(body);

    if(!business) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.status(201).json({ status: "success", payload: business });
}

export const addProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const business = await businessService.getBusinessById(id);

    business.products.push(product);
    await businessService.updateBusiness(id, business);

    res.status(204).json({ status: "success", payload: "addProduct" });
}