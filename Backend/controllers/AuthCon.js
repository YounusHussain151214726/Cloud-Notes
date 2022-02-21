const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const usermodal = require("../modules/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "Younus1@";

const Fetchuser = require("../Middleware/Fetchuser");

const signup = async (req, res) => {
  let success = false;
  const checkUser = await usermodal.findOne({ Email: req.body.email });
  if (checkUser) {
    res.status(200).send({ message: "This Email Already Registerd" });
  } else {
    var hashPass = await bcrypt.hash(req.body.password, 12);
    let userCreate = usermodal({
      Name: req.body.name,
      Email: req.body.email,
      Password: hashPass,
    });
    userCreate
      .save()
      .then((resp) => {
        const data = {
          user: {
            id: resp.id,
          },
        };
        const token = jwt.sign(data, secret);
        success = true;
        res
          .status(200)
          .send({ success, token, user: resp, message: "User Added" });
      })
      .catch((err) => {
        res.status(400).send({ result: err, message: "error" });
      });
  }
};

const signin = async (req, res) => {
  const checkUser = await usermodal.findOne({ Email: req.body.email });
  let success = false;

  if (checkUser) {
    var checkPass = await bcrypt.compare(req.body.password, checkUser.Password);
    if (checkPass) {
      success = true;
      const data = {
        user: {
          id: checkUser.id,
        },
      };

      const token = jwt.sign(data, secret);
      res.send({ success, token, message: "Your are LogIn" });
    } else {
      res.send({ success, message: "Check Your Password" });
    }
  } else {
    
    res.send({ success,message:"Check Your Credential"});
  }
};
const fetchuser = router.post("/fetchuser", Fetchuser, async (req, res) => {
  try {
    let userId = req.user.id;
    const user = await usermodal.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { signup, signin, fetchuser };
