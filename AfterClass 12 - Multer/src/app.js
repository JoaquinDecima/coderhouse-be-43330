import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());



app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
