import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import productRoutes from "./routes/product.routes.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body (middleware - function that runs before you send a response back to the client)

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log("Server started at http://localhost:" + PORT);
    } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1);
    }
    
});
