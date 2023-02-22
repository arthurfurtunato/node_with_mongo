import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@aluraexpress.hktj8hd.mongodb.net/${process.env.MONGO_DBNAME}`);

let db = mongoose.connection;

export default db;