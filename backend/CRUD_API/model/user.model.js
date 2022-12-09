const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  name: { type: String, required: true },
  money: { type: Number, required: true },
  age: { type: Number, required: true },
});

const usermodel=mongoose.model("skk",user_schema);

module.exports=usermodel;
