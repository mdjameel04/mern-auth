import mongoose, { connect } from "mongoose";

const connectDb = async ()=>{
    try {
            const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`moongose was connected : ${connect.connection.host}`)
    } catch (error) {
     console.log(error.message)   
     process.exit(1)
    }

};

export default connectDb