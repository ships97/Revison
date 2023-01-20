const express = require("express");
const mongoose = require("mongoose");
const wibemodel = require("./model/wibe.model");
const app = express();
app.use(express.json());
mongoose.set("strictQuery", true);

const databaseconnect = () => {
  mongoose.connect(
    "mongodb+srv://skk:skk123@cluster0.h5brjlh.mongodb.net/?retryWrites=true&w=majority"
  );
};

app.get("/", (req, res) => {
  res.send("hello i am ready");
});

app.get("/data", async (req, res) => {
  let data = await wibemodel.find();
  res.send(data);
});

app.post("/data", async (req, res) => {
  let data = await wibemodel.create(req.body);
  res.send(data);
  data.save();
});

app.get("/data/:id",async(req,res)=>{

    let data=await wibemodel.findById(req.params.id);
    res.send(data)
})


app.delete("/data/:id",async(req,res)=>{

    let data=await wibemodel.findByIdAndDelete(req.params.id);
    res.send(data)
})

app.patch("/data/:id",async(req,res)=>{

  let data=await wibemodel.findByIdAndUpdate(req.params.id,req.body);
  res.send(data)
  data.save()
})


app.listen(7000, () => {
  databaseconnect();
  try {
    console.log("backend start");
  } catch (err) {
    console.log(err);
  }
});
