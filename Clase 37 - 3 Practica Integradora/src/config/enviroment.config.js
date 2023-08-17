import dotenv from 'dotenv';

dotenv.config();

const persistence = process.env.PERSISTENCE || 'mongodb';
let userDAO;
let courseDAO;

if (persistence === 'mongodb') {
    console.log(`Working with Database persistence in mongodb`);
    await import('../dao/dbManagers/courses.js')
        .then(module => {
            courseDAO = new module.default();
        })
    await import('../dao/dbManagers/users.js')
        .then(module => {
            userDAO = new module.default();
        })
} else {
    console.log(`Working with file persistence`);
    await import('../dao/fileManagers/courses.js')
        .then(module => {
            courseDAO = new module.default();
        })
    await import('../dao/fileManagers/users.js')
        .then(module => {
            userDAO = new module.default();
        })
}

export default {
    PORT: process.env.PORT || 8080,
    MONGO_URI: process.env.MONGO_URI,
    userDAO: userDAO,
    courseDAO: courseDAO
}