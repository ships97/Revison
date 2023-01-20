const mongoose = require("mongoose");

const wibeschema = new mongoose.Schema({
  name: { type: String },
  money: { type: Number, required: true },
});


const wibemodel=mongoose.model("wibe",wibeschema);

module.exports=wibemodel;