const { model, Schema } = require("mongoose");

const boxSchema = new Schema({
  name: String,
  description: String,
  image: String,
  cost: Number,
  inventory: Number,
  createdAt: String,
});

module.exports = model("Box", boxSchema);
