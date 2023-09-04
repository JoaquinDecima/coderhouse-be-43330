import winston from 'winston';
import enviroment from '../tools/enviroment.tool.js';

let logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: 'debug' }),
        new winston.transports.File({ filename: 'combined.log', level: 'warn' }),
    ],
});

if (enviroment.ENVIROMENT === 'development') {
    logger = winston.createLogger({
        transports: [
            new winston.transports.Console({ level: 'verbose' }),
        ],
    });
}

export const loggerMiddleware = (req, res, next) => {
    req.logger = logger;
    logger.http(`${req.method} - ${req.url} - [${req.ip}] - ${req.get('user-agent')} - ${new Date().toISOString()}`);
    next();
}
