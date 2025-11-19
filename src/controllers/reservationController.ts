import { Request, Response } from "express";

import Reservation from "../models/reservationModel";

export const getReservations = async (req: Request, res: Response) => {
  try {
    const data = await Reservation.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const postReservation = async (req: Request, res: Response) => {
  try {
    const data = new Reservation(req.body);
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};