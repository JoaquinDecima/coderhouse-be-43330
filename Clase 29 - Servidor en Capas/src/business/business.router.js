import { Routers } from "express";

import { createBusiness, getBusinessById, getBusiness, addProduct } from "./business.controller.js";

const businessRouter = Routers();

businessRouter.get('/', getBusiness);
businessRouter.get('/:id', getBusinessById);
businessRouter.post('/', createBusiness);
businessRouter.post('/:id/product', addProduct);

export default businessRouter;