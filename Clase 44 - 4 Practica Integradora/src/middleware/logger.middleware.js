export const loggerMiddleware = (logger) => {
  return (req, res, next) => {
    req.logger = logger;
    const { method, url, query } = req;
    logger.debug(`Request: ${method} ${url} ${JSON.stringify(query)} `);
    next();
  }
}