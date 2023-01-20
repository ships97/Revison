const mongoose = require(`mongoose`);
const express = require(`express`);
const needusermodel = require("./model/user.model");
const { findOneAndDelete } = require("./model/user.model");
const app = express();

app.use(express.json());

const databas_conncet = () => {
  mongoose.connect(
    "mongodb+srv://skk:skk123@cluster0.h5brjlh.mongodb.net/?retryWrites=true&w=majority"
  );
};

app.get("/", async (req, res) => {
  let data = await needusermodel.find();
  res.send(data);
});

app.get("/:id", async (req, res) => {
  let data = await needusermodel.findById(req.params.id);
  res.send(data);
});

app.post("/data", async (req, res) => {
  let data = await needusermodel.create(req.body);
  res.send(data);
  data.save();
});

app.delete("/:id", async (req, res) => {
  let data = await needusermodel.findOneAndDelete(req.params.id);
  res.send(data);
});
app.patch("/:id", async (req, res) => {
  let data = await needusermodel.findByIdAndUpdate(req.params.id, req.body);
  res.send(data);
  data.save();
});



app.get("/:asc",async(req,res)=>{

const data=await needusermodel.find().sort({"money":1})

  res.send(data)
})


app.listen(7000, () => {
  databas_conncet();

  try {
    console.log("connection is Done");
  } catch (err) {
    console.log("error", err);
  }
});
