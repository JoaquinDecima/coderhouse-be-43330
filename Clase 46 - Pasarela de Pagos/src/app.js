import express from 'express';
import cors from 'cors';

import paymentsRouter from './payments/pyments.router.js';

const app = express();

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/payments", paymentsRouter);

// Starting the server
app.listen(8080, () => {
  console.log('Server on port 8080');
});