import mongoose from "mongoose";


const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@flipkartclone.rl9zaix.mongodb.net/?retryWrites=true&w=majority&appName=flipkartclone`
    try {
       await mongoose.connect(URL);
       console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to database",error.message);
    }
}

export default Connection;