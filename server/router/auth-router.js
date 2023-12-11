const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// router.get("/",(req,res)=> {
//     res.status(200)
//     .send('using router')
//     });


router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register)



module.exports= router

