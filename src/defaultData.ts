import Lot from "./models/lotModel";
import lotData from "./lotData.json";

interface LotData {
  name: string;
  description: string;
  lat: number;
  lng: number;
  totalSpace: number;
  availableSpace: number;
  handicapParking: string;
}

export const initializeDefaultData = async () => {
  try {
    const defaultLots: LotData[] = lotData;

    defaultLots.forEach(async (lot) => {
      const existingLot = await Lot.findOne({ name: lot.name });
      if (existingLot) {
        await Lot.deleteMany({ name: lot.name });
      }
      const newLot = new Lot(lot);
      await newLot.save();
    });
    
    console.log('Default data initialized');
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
};