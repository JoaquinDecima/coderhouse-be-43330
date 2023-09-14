import winston from 'winston';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    }),
  ],
  exitOnError: false
});