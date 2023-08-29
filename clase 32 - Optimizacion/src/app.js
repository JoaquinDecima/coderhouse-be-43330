import express from 'express';
import compression from 'express-compression';
import userRouter from './routers/user.router.js';
import errorsManagerMiddleware from './middleware/errorsManager.middleware.js';

const app = express();

app.use(express.json());

app.use(compression({
    brotli: {
        enabled: true,
        zlib: {}
    },
}))

app.get('/', (req, res) => {
    let salida = "Si Jugas al LOL. ";

    for (let i = 0; i < 10e5; i++) {
        salida += "No aprobas el tp final. ";
    }

    res.send(salida);
});

app.use('/api/users', userRouter);

app.use(errorsManagerMiddleware);

app.listen(3000, () => {
    console.log('Server on port 3000');
});