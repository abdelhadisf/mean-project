const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Ajout de CORS middleware pour toutes les routes

mongoose
  .connect('mongodb+srv://ad:1234@cluster0.4ppooxl.mongodb.net/TP-Web')
  .then(() => {
    console.log("connecting to mongodb ...");
  })
  .catch((error) => {
    console.log("error connecting !" + error);
  });

const UserSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 200,
      trim: true,
    },
    password: {
      type: Number,
      required: true,
      minlength: 3,
      maxlength: 200,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

app.get("/user", async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).send("error");
  }
});

app.post("/user", async (req, res) => {
  try {
    const newUser = new User({
      login: req.body.login,
      password: req.body.password,
    });

    const result = await newUser.save();

    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const deletedOne = await User.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedOne);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
