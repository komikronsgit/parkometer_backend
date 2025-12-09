import Lot from "./models/lotModel";
import User from "./models/userModel";
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
    await Lot.deleteMany();
    defaultLots.forEach(async (lot) => {
      const existingLot = await Lot.findOne({ name: lot.name });
      const newLot = new Lot(lot);
      await newLot.save();
    });
    
    const adminAccount = await User.findOne({ name: "admin" });
    if (!adminAccount) {
      const adminUser = new User({
        name: "admin",
        password: "admin",
        email: "admin",
        phone: "admin",
        plate: "admin"
      });
      await adminUser.save();
    }

    console.log('Default data initialized');
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
};