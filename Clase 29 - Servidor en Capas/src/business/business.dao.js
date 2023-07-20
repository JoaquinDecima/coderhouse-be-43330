import buisinessModel from "./business.model.js";

export default class Business {
    getBusiness = async () => {
        try{
            return await buisinessModel.find({});
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    getBusinessById = async (id) => {
        try{
            return await buisinessModel.findById(id);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    createBusiness = async (business) => {
        try{
            return await buisinessModel.create(business);
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    updateBusiness = async (id, business) => {
        try{
            return await buisinessModel.updateOne({ _id: id }, { $set: business });
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}