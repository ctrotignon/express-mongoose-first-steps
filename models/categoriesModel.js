const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: String,
}, {versionKey: false})

const Category = mongoose.model('category', categorySchema)

module.exports = Category;