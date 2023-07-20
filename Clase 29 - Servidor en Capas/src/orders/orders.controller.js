import Order from "./orders.dao.js";
import User from "../users/users.dao.js";
import Business from "../business/business.dao.js";

const orderService = new Order();
const userService = new User();
const businessService = new Business();

export const getOrders = async (req, res) => {
    const orders = await orderService.getOrders();

    if(!orders) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.json({ status: "success", payload: orders });
}

export const getOrderById = async (req, res) => {
    const id = req.params.id;
    const order = await orderService.getOrderById(id);

    if(!order) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    res.json({ status: "success", payload: order });
}

export const createOrder = async (req, res) => {
    const { user, business, products } = req.body;
    const userFound = await userService.getUserById(user);
    const businessFound = await businessService.getBusinessById(business);

    if(!userFound || !businessFound) {
        res.status(404).json({ status: "error", message: "Usuario o Empresa invalido" });
    }

    const orderNumber = Date.now() + Math.floor(Math.random() * 10000+1);

    const totalPrice = products.reduce((acc, product) => {
        return acc + Math.floor(Math.random() * 1000+1);
    }, 0);

    const preOrder = {
        number: orderNumber,
        user,
        business,
        products,
        totalPrice,
        status: "pending"
    }

    const order = await orderService.createOrder(preOrder);

    if(!order) {
        res.status(500).json({ status: "error", message: "Error interno del servicio" });
    }

    userFound.orders.push(order._id);
    await userService.updateUser(user, userFound);

    res.status(201).json({ status: "success", payload: order });
}

export const resolveOrder = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;

    const order = await orderService.getOrderById(id);
    order.status = status;

    await orderService.resolveOrder(id, order);

    res.status(204).json({ status: "success", message: "resolveOrder" });
}