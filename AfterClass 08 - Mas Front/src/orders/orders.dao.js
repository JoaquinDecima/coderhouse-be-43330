import ordersModel from "./orders.model.js";

export default class Order {
    getOrders = async () => {
        try{
            return await ordersModel.find({});
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    getOrderById = async (id) => {
        try{
            return await ordersModel.findById(id);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    createOrder = async (order) => {
        try{
            return await ordersModel.create(order);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    resolveOrder = async (id, order) => {
        try{
            return await ordersModel.updateOne({ _id: id }, { $set: order });
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}