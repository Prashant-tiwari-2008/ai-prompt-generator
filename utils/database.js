import mongoose from "mongoose";

let isConnected = false;

export const connectTODB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDb is already connected")
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
        });

        isConnected = true;
        console.log("Mongodb connect")
    } catch (error) {
        console.log("error in db connection :", error)
    }
}
