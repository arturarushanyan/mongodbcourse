const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    quantity: Number,
    cpu: Array

},{
    versionKey: false,
    strict: false
});

let Product = mongoose.model('Products', productSchema);

module.exports = Product;