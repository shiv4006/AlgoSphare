import user from "../models/userModel.js"
import bcrypt, { hash } from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if(!(name && email && password && confirmPassword)) {
      return res.status(400).json({message: "all fields are required"});
    }

    if(password != confirmPassword) {
      return res.status(400).json({message: "password and confirm password must be same"});
    }

    const existingUser = await user.findOne({email});
    if(existingUser) {
      return res.status(400).json({message: "user already exist"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({name, email, password: hashedPassword});
    await newUser.save();

    const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

    res.status(200).json({message: "user registered successfully", token});

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "error creating user"});
  }
}

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!(email && password)) {
      return res.status(400).json({message: "all fields are required"});
    }
    
    console.log(email, password);
    
    const existingUser = await user.findOne({email});
    if(!existingUser) {
      return res.status(400).json({message: "user not found"});
    }
    

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if(!isPasswordCorrect) {
      return res.status(400).json({message: "invalid credentials"});
    }

    const token = jwt.sign({userId: existingUser._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

    // Set the token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // Send the token in the response
    console.log("lggine");
    res.status(200).json({message: "user logged in successfully", token});

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "error logging in user"});
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({message: "user logged out successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "error logging out user"});
  }
}