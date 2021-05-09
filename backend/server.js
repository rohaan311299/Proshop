import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import productRoutes from "./Routes/productRoutes.js";
import {notFound, errorHandler} from "./Middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app=express();

app.get("/",(req,res)=>{
    res.send("API is running");
});

app.use("/api/products",productRoutes);

app.use(notFound)
app.use(errorHandler);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
})