import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body (middleware - function that runs before you send a response back to the client)

app.use("/api/products", productRoutes);

app.listen(4000, () => {
    connectDB();
    console.log("Server started at http://localhost:4000")
});
