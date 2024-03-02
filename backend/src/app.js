import express from "express";
import products from './routes/products'
import cors from 'cors'





const app=express();
app.use(cors({

    origin: '*', // Cambia esto al origen correcto de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Habilita el intercambio de cookies (si es necesario)


}));




app.use(express.json());
app.use(products);

export default app;