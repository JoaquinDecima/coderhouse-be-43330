import mongoose from "mongoose";

const schema = new mongoose.Schema({});

const ordersModel = mongoose.model("orders", schema);
export default ordersModel;