const mongoose = require(`mongoose`);
const express = require(`express`);
const needusermodel = require("./model/user.model");
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

app.post("/data", async (req, res) => {
  let data = await needusermodel.create(req.body);
  res.send(data);
  data.save();
});

app.listen(7000, () => {
  databas_conncet();

  try {
    console.log("connection is Done");
  } catch (err) {
    console.log("error", err);
  }
});
