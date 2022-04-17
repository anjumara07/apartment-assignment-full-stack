const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    ownername:{type: 'string',required: true},
    flatno:{type: 'number',required: true},
    block:{type: 'string',required: true},
    totalresident:{type: 'number',required: true},
    
},{
    versionKey:false,
    timestamps:true,
}

)

module.exports = mongoose.model("apartment",apartmentSchema);