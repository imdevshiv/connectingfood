const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");
const { getFoodItems } = require("./models/GetFoodItems");
const { getFoodCategory } = require("./models/GetFoodCategory");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
//Port and MongoDB
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoDB();
  getFoodItems();
  getFoodCategory();
});
