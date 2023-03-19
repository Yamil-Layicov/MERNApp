const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://yamil:asd123@cluster0.fxlwrui.mongodb.net/mernApp?retryWrites=true&w=majority")

        console.log(`MongoDB qosuldu: ${conn.connection.host}`.blue.underline)
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB