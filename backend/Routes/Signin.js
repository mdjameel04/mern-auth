import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import User from "../Models/User.js";


const router = express.Router();

// SignUp
router.post("/signup", async (req, res)=>{
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ msg: "User already exists" });

        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPass });
        await newUser.save();

        res.json({ msg: "User Registered Successfully" });
    } catch(err){
        res.status(500).json({ msg: "Server Error" });
    }
});
  
export default router