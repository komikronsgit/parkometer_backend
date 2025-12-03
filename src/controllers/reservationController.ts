import { Request, Response } from "express";

import Reservation from "../models/reservationModel";
import Lot from "../models/lotModel";

export const getReservations = async (req: Request, res: Response) => {
  try {
    const data = await Reservation.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getReservationsByUsername = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    if (username != 'Guest') {
      const data = await Reservation.find({ username });
      res.status(200).json(data);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getAvailableReservations = async (req: Request, res: Response) => {
  try {
    const currentTime = new Date();
    const data = await Reservation.find({ $and: [ 
      { startTime: { $lt: currentTime } },
      { endTime: { $gt: currentTime } }
    ] });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const postReservation = async (req: Request, res: Response) => {
  try {
    const data = new Reservation(req.body);
    const lotData = await Lot.findOne({ name: data.lotName });
    if (!lotData) {
      return res.status(404).json({ message: "Lot doesn't exists" });
    }
    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deleteReservationById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await Reservation.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    const deletedData = await Reservation.findByIdAndDelete(id);
    res.status(200).json(deletedData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const putStartAndEndTimeById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { startTime, endTime } = req.body;
    const data = await Reservation.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    const updatedData = await Reservation.findByIdAndUpdate(id,{ startTime, endTime }, { new: true });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};