import { Request, Response, NextFunction } from "express";
import User from "../models/userModel";

export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { adminName } = req.body;

    // Allow hardcoded admin
    if (adminName === "admin") {
      return next();
    }

    // DB admin
    const admin = await User.findOne({ name: adminName, isAdmin: true });

    if (!admin) {
      return res.status(401).json({ message: "Not authorized" });
    }

    next();

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
