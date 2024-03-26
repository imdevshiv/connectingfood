const mongoose = require("mongoose");

const { Schema } = mongoose;

const FoodCategory = new Schema({
  CategoryName: { type: String, require: true },
});

module.exports = mongoose.model("foodCategory", FoodCategory);
