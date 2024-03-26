const mongoose = require("mongoose");

const { Schema } = mongoose;

const FoodItemSchema = new Schema({
  CategoryName: { type: String, require: true },
  name: { type: String, require: true },
  img: { type: String, require: true },
  options: [
    {
      _id: false,
      half: { type: Number, require: true },
      full: { type: Number, require: true },
    },
  ],

  description: { type: String, require: true },
});
module.exports = mongoose.model("food_items", FoodItemSchema);
