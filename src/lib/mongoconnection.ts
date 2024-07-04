const mongoose = require("mongoose");

export const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongourl);
        console.log("MongoDB Connected: ", conn.connection.host);
        return conn
    } catch (error) {
        console.log(error);
        process.exit(1);
        return null;
    }
}