const mongoose = require("mongoose");

//"mongodb://gofood:Shiv404050@ac-fptaxde-shard-00-00.prnar7t.mongodb.net:27017,ac-fptaxde-shard-00-01.prnar7t.mongodb.net:27017,ac-fptaxde-shard-00-02.prnar7t.mongodb.net:27017/goofoodmern?ssl=true&replicaSet=atlas-bl5xcf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
// mongoose.set("strictQuery", false);
const mongoURI =
  "mongodb+srv://gofood:Shiv404050@cluster0.prnar7t.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoDB;
