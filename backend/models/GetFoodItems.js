const FoodItems = require("../models/FoodItems");

const getFoodItems = async () => {
  try {
    const data = await FoodItems.find();

    global.food_items = data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getFoodItems };
