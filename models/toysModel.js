const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const toySchema = new Schema({

    name : String,
    description : String,
    price : Number,
    category : String
    
    })
    
    const Toys = mongoose.model('toy', toySchema)

    module.exports = Toys;
