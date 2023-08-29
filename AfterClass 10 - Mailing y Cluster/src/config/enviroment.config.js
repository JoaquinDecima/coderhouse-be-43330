import dotenv from 'dotenv';

dotenv.config();

class ConfigManager {
    static #instance = null;
    constructor() {
        if (!ConfigManager.#instance) {
            ConfigManager.#instance = this;
            this.PORT = process.env.PORT || 8080;
            this.MONGO_URI = process.env.MONGO_URI;
            this.PERSISTENCE = process.env.PERSISTENCE || 'mongodb';
            this.MAIL_SERVICE = process.env.MAIL_SERVICE || 'gmail';
            this.MAIL_USER = process.env.MAIL_USER;
            this.MAIL_PASS = process.env.MAIL_PASS;
            this.userDAO = null;
            this.courseDAO = null;
            this.initializePersistence();
        } else {
            return ConfigManager.#instance;
        }
    }

    async initializePersistence() {
        if (this.PERSISTENCE === 'mongodb') {
            console.log(`Working with Database persistence in mongodb`);
            await import('../dao/dbManagers/courses.js')
                .then(module => {
                    this.courseDAO = new module.default();
                })
            await import('../dao/dbManagers/users.js')
                .then(module => {
                    this.userDAO = new module.default();
                })
        } else {
            console.log(`Working with file persistence`);
            await import('../dao/fileManagers/courses.js')
                .then(module => {
                    this.courseDAO = new module.default();
                })
            await import('../dao/fileManagers/users.js')
                .then(module => {
                    this.userDAO = new module.default();
                })
        }
    }
}




const config = new ConfigManager();

export default config;