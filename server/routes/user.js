require("dotenv").config();
const express = require("express");
const User = require("../models/registration");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middlewares/fetchuser");

// signup route
router.post("/signup",[
    body("email", "Enter an unique and valid Email.").isEmail(),
    body("password", "Minimum length of password should be 5").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        userName: req.body.userName,
        occupation: req.body.occupation,
        description: req.body.description,
        email: req.body.email,
        password: secPass,
      });
      const data={
        user:{
          id:user.id
        }
      }
      const jwtData=jwt.sign(data, process.env.JWTwebToken);
      res.json({message:"Signup successful",jwtData});

    } catch (err) {
      console.log(err.message);
      res.status(500).send("Some error occured");
    }
  }
);


// login route
router.post('/login', [
  body("email", "Enter an unique and valid Email.").isEmail(),
  body("password", "Password cannot be blank").exists(),
], async (req, res) => {
  let success=false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success, error: "Email or Password is wrong" });
    }
  
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ success, error: "Email or Password is wrong" });
    }
    const data={
      user:{
        id:user.id
      }
    }
    const jwtData=jwt.sign(data, process.env.JWTwebToken);
    success=true;
    res.json({ success: true, jwtData });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// get user details
router.post('/getuser', fetchuser, async (req, res) => {
try{
userId=req.user.id;
const user=await User.findById(userId).select("-password");
res.json(user);
} catch (error) {
console.log(error.message);
res.status(500).send("Internal Server Error");
}})
module.exports = router;
