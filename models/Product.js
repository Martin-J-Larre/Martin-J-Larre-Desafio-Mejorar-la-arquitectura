const mongoose = require("mongoose");
const productModel = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
    },
});
module.exports = mongoose.model("Product", productModel);
