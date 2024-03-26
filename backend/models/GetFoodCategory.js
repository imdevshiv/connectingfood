const FoodCategory = require("../models/FoodCategory");

const getFoodCategory = async () => {
  try {
    const data = await FoodCategory.find();

    global.foodCategory = data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getFoodCategory };
