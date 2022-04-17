const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
    name:{type: 'string',required: true},
    age:{type: 'number',required: true},
    gender:{type: 'string',required: true},
    apartmentId : {type: mongoose.Schema.Types.ObjectId, ref: "apartment", required: true}
    
},{
    versionKey:false,
    timestamps:true,
}

)

module.exports = mongoose.model("resident",residentSchema);