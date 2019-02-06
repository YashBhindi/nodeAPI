const mongoose = require('mongoose');

constproductSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : String,
    price : Number
})

module.exports = mongoose.model('Product' , constproductSchema);