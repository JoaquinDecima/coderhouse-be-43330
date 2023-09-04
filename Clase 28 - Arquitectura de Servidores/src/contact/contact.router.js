import { Router } from "express";
import ContactFactory from "./contact.factory.js";

//importo DAOs
import ContactMongoDAO from "./dao/contactMongo.dao.js";
import ContactFileDAO from "./dao/contactFile.dao.js";

const controller = new ContactFactory(new ContactMongoDAO());
const contactRouter = Router();

contactRouter.get('/', async (req, res) => {
    try {
        const contacts = await controller.getContacts();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

contactRouter.post('/', async (req, res) => {
    try {
        const contact = await controller.addContact(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default contactRouter;