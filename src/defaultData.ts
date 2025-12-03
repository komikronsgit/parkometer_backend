import Lot from "./models/lotModel";
import Reservation from "./models/reservationModel";

export const initializeDefaultData = async () => {
  try {
    const defaultLots = [
      { name: "Lot A", availableSpaces: 12, totalSpaces: 12, distance: '2 min' },
      { name: "Lot B", availableSpaces: 4, totalSpaces: 4, distance: '5 min' },
      { name: "Lot C", availableSpaces: 20,  totalSpaces: 20, distance: '1 min' },
    ];

    defaultLots.forEach(async (lot) => {
      const existingLot = await Lot.findOne({ name: lot.name });
      if (!existingLot) {
        const newLot = new Lot(lot);
        await newLot.save();
      }
    });
    
    console.log('Default data initialized');
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
};