import { Request, Response } from "express";
import User from "../models/userModel";

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;

    // Hardcoded admin login
    if (name === "admin" && password === "admin") {
      return res.status(200).json({ message: "Admin logged in" });
    }

    // DB admin login (optional)
    const admin = await User.findOne({ name, password, isAdmin: true });
    if (!admin) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }

    return res.status(200).json({ message: "Admin logged in" });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
