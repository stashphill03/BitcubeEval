const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    DOB:{
        type: String,
        required: true,
        
    },
    degree:{
        type: String,
        required: true
        
    }

})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;