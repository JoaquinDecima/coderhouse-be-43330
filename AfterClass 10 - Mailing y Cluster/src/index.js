import cluster from "cluster";
import { logger } from "./config/logger.config.js";

if (cluster.isPrimary) {
  logger.info(`Primary ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    logger.error(`worker ${worker.process.pid} died - ${signal || code}`);
    cluster.fork();
  });

} else {
  logger.info(`Worker ${process.pid} started`);
  import("./config/enviroment.config.js")
    .then((module) => {
      const config = module.default;

      import("./app.js").then((module) => {
        const app = module.default;
        app.listen(config.PORT, () =>
          logger.info(`Listening on PORT ${config.PORT}`)
        );
      });

    })
}