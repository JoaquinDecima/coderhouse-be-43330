import MongoSingleton from './MongoSingleton.js';

const instance = MongoSingleton.getInstance();
const instance2 = MongoSingleton.getInstance();
