export default class ContactFileDAO {
    constructor() {
        this.collection = [];
    }
    
    async get() {
        return this.collection;
    }
    
    async getById(id) {
        return this.collection.find(item => item.id === id);
    }
    
    async add(data) {
        const newContact = { ...data,
        id: this.collection.length + 1
        };
        this.collection.push(newContact);
        return newContact;
    }
    
    async update(id, data) {
        let index = this.collection.findIndex(item => item.id == id);
        if (index < 0) {
            throw new Error('Contact not found');
        }
    
        for (const key in data) {
        collection[index][key] = data[key];
        }
    
        return collection[index];
    }
    
    async delete(id) {
        let contact = this.collection.find(item => item.id === id);
    
        if (!contact) {
        throw new Error('Contact not found');
        }
    
        this.collection = this.collection.filter(item => item.id != id);
        return contact;
    }
}