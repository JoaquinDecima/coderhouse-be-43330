import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    products: []
});

const buisinessModel = mongoose.model("business", schema);
export default buisinessModel;