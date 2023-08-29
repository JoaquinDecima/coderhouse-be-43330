import contactsModel from "../schemas/contact.schema.js";

export default class ContactMongoDAO{
    constructor(){
        this.collection = contactsModel;
    }

    async get(){
        return await this.collection.find();
    }

    async getById(id){
        return await this.collection.findById(id);
    }

    async add(data){
        return await this.collection.create(data);
    }

    async update(id, data){
        let contact = await this.collection.findById(id);
        
        if(!contact){
            throw new Error('Contact not found');
        } 

        for (const key in data) {
            contact[key] = data[key];
        }

        return await contact.save();
    }

    async delete(id){
        let contact = await this.collection.findById(id);
        
        if(!contact){
            throw new Error('Contact not found');
        } 

        return await contact.remove();
    }
}