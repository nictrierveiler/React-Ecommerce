import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => {
        console.log('DB Connected')
    })

    await mongoose.connect(`${process.env.MONGODB}/LaVeilleuse-Ecommerce`)

}

export default connectDB;