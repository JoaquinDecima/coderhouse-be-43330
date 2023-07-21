import mongoose from "mongoose";

const schema = new mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "business"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users29"
    },
    products: [],
    status: String,
    totalPrice: Number,
});

const ordersModel = mongoose.model("orders", schema);
export default ordersModel;