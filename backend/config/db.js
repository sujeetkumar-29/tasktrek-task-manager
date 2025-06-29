import mongoose from "mongoose";

export const connectDB= async () =>{
    const uri = process.env.MONGO_URI.replace(/\/+$/, ''); // remove trailing slash
    await mongoose.connect(`${uri}/tasktrek`)
    .then(()=>console.log("DB CONNECTED"));
  
}