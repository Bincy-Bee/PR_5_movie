const mongoose = require('mongoose');
require("dotenv").config();

const db = async()=>{
    let url = process.env.DB_URL;
    await mongoose.connect(url);
    console.log("DB connected")
}

module.exports={db}