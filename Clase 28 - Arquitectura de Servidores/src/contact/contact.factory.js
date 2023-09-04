import ContactDTO from "./dto/contact.dto.js";

export default class ContactFactory {
    constructor(dao) {
        this.dao = dao;
    }

    async getContacts() {
        const contacts = await this.dao.get();
        return contacts;
    }

    async addContact(contact) {
        const newContact = new ContactDTO(contact);
        return await this.dao.add(newContact);
    }
}