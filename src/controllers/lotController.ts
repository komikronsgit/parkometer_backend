import { Request, Response } from "express";

import Lot from "../models/lotModel";

export const getLots = async (req: Request, res: Response) => {
  try {
    const data = await Lot.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const postLot = async (req: Request, res: Response) => {
try {
    const data = new Lot(req.body);
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};