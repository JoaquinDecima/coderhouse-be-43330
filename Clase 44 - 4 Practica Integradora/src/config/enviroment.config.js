import dotenv from 'dotenv';
import { logger } from './logger.js';

dotenv.config();

class ConfigManager {
    static #instance = null;
    constructor() {
        if (!ConfigManager.#instance) {
            ConfigManager.#instance = this;
            this.PORT = process.env.PORT || 8080;
            this.MONGO_URI = process.env.MONGO_URI;
            this.PERSISTENCE = process.env.PERSISTENCE || 'mongodb';
            this.userDAO = null;
            this.courseDAO = null;
            this.initializePersistence();
        } else {
            return ConfigManager.#instance;
        }
    }

    async initializePersistence() {
        if (this.PERSISTENCE === 'mongodb') {
            logger.info(`Working with Database persistence in mongodb`);
            await import('../dao/dbManagers/courses.js')
                .then(module => {
                    this.courseDAO = new module.default();
                })
            await import('../dao/dbManagers/users.js')
                .then(module => {
                    this.userDAO = new module.default();
                })
        } else {
            logger.info(`Working with file persistence`);
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