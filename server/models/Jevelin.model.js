const mongoose = require("mongoose");

const JevelinModel = mongoose.model(
  "JevelinModel",
  new mongoose.Schema({
    name: String,
    subTitle: String,
    desc: String,
    price: Number,
    model: String,
    image: String,
  })
);

module.exports = { JevelinModel };
