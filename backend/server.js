import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body (middleware - function that runs before you send a response back to the client)

app.post("/api/products", async (req, res) => {
    // res.send("Server is ready! Testing change")
    const product = req.body; // user will send this data body

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.listen(4000, () => {
    connectDB();
    console.log("Server started at http://localhost:4000")
});

// O0e80HKKz12R1hci