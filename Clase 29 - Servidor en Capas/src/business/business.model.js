import mongoose from "mongoose";

const schema = new mongoose.Schema({});

const buisinessModel = mongoose.model("business", schema);
export default buisinessModel;