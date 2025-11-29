import { Request, Response } from "express";
import Spot from "../models/spotModel";

export const getSpots = async (req: Request, res: Response) => {
  try {
    const data = await Spot.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const addSpot = async (req: Request, res: Response) => {
  try {
    const data = new Spot(req.body);
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
