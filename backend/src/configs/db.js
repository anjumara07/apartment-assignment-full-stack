const mongoose = require('mongoose');
require("dotenv").config();
module.exports = ()=>{
    return mongoose.connect(process.env.DBCONNECTION);
};


// mongodb+srv://anjum:anjum123@cluster0.l4lyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
