import { Request, Response } from "express";

import User from "../models/userModel";

export const confirmPassword = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const userData = await User.findOne({ username, password });
    if (!userData) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Credentials confirmed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const data = new User(req.body);
    const userData = await User.findOne({ username: data.username });
    if (!userData) {
      return res.status(404).json({ message: "User already exist" });
    }
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};