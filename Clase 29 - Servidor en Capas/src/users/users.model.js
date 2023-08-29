import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orders"
    }]
});

const usersModel = mongoose.model("users29", schema);
export default usersModel;