import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const connectionPoint = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`Successfully connected`)
    }
    catch(error){
        console.error(`error found ${error}`);
        process.exit(1);
    }
}

export default connectDB;
