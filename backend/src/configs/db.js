const mongoose = require('mongoose');

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://anjum:anjum123@cluster0.0q4yj.mongodb.net/apartment");
};


// mongodb+srv://anjum:anjum123@cluster0.l4lyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
