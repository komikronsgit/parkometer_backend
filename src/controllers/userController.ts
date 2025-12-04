import { Request, Response } from "express";
import User from "../models/userModel";

// ========== USER LOGIN ==========
export const confirmPassword = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Credentials confirmed" });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ========== REGISTER NEW USER ==========
export const postUser = async (req: Request, res: Response) => {
  try {
    const existing = await User.findOne({ name: req.body.name });

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User(req.body);
    const saveUser = await newUser.save();

    res.status(201).json(saveUser);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ========== ADMIN LOGIN ==========
export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;

    const admin = await User.findOne({ name, password, isAdmin: true });

    if (!admin) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    res.status(200).json({ message: "Admin authenticated", adminName: admin.name });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
