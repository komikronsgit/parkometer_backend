import Lot from "./models/lotModel";

export const initializeDefaultData = async () => {
  try {
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
    console.log('Default data initialized');
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
};