import cluster from "cluster";

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < 12; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(`worker ${worker.process.pid} died - ${signal || code}`);
    cluster.fork();
  });

} else {
  console.log(`Worker ${process.pid} started`);
  import("./config/enviroment.config.js")
    .then((module) => {
      const config = module.default;

      import("./app.js").then((module) => {
        const app = module.default;
        app.listen(config.PORT, () =>
          console.log(`Listening on PORT ${config.PORT}`)
        );
      });

    })
}