import { Routers } from "express";

import { createOrder, getOrderById, getOrders, resolveOrder } from "./orders.controller.js";

const ordersRouter = Routers();

ordersRouter.get('/', getOrders);
ordersRouter.get('/:id', getOrderById);
ordersRouter.post('/', createOrder);
ordersRouter.put('/:id', resolveOrder);

export default ordersRouter;