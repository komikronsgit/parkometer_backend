import Lot from "./models/lotModel";
import Reservation from "./models/reservationModel";

export const initializeDefaultData = async () => {
  try {
    /*
    const defaultLots = [
      { name: "Lot A", totalSpaces: 100, available: 100 },
      { name: "Lot B", totalSpaces: 80, available: 80 },
      { name: "Lot C", totalSpaces: 120, available: 120 },
      { name: "Lot D", totalSpaces: 90, available: 90 },
    ];

    defaultLots.forEach(async (lot) => {
      const existingLot = await Lot.findOne({ name: lot.name });
      if (!existingLot) {
        const newLot = new Lot(lot);
        await newLot.save();
      }
    });

    const defaultReservations = [
      { username: "user1", lot: "Lot A", startDateTime: new Date("2025-10-20"), endDateTime: new Date("2025-12-20") },
      { username: "user1", lot: "Lot B", startDateTime: new Date("2025-09-20"), endDateTime: new Date("2025-10-20") },
      { username: "user1", lot: "Lot C", startDateTime: new Date("2025-12-10"), endDateTime: new Date("2025-12-20") },
    ];

    defaultReservations.forEach(async (reservation) => {
      const existingReservation = await Reservation.findOne({ username: reservation.username, lot: reservation.lot });
      if (!existingReservation) {
        const newReservation = new Reservation(reservation);
        await newReservation.save();
      }
    });
    */
    console.log('Default data initialized');
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
};