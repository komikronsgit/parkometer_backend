import { Request, Response } from "express";
import Lot from "../models/lotModel";
import Reservation from "../models/reservationModel";

// ========== GET ALL PARKING LOTS ==========
export const getLots = async (req: Request, res: Response) => {
  try {
    const data = await Lot.find();
    const now = new Date(new Date().toISOString());

    // update available spaces for each lot
    await Promise.all(
      data.map(async (lot) => {
        const activeReservations = await Reservation.countDocuments({
          lotName: lot.name,
          startTime: { $lt: now },
          endTime: { $gt: now },
        });

        lot.availableSpace = lot.totalSpace - activeReservations;
        await lot.save();
      })
    );

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ========== CREATE NEW LOT ==========
export const postLot = async (req: Request, res: Response) => {
  try {
    const data = new Lot(req.body);
    const saveData = await data.save();
    res.status(201).json(saveData);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ========== UPDATE LOT (ADMIN) ==========
export const updateLot = async (req: Request, res: Response) => {
  try {
    const updated = await Lot.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Lot not found" });
    }

    res.status(200).json(updated);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// ========== DELETE LOT (ADMIN) ==========
export const deleteLot = async (req: Request, res: Response) => {
  try {
    const deleted = await Lot.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Lot not found" });
    }

    res.status(200).json({ message: "Lot deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
