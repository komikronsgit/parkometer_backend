export const initializeDefaultData = async () => {
  try {
    const defaultLots = [
      {
        name: "Lot A",
        availableSpaces: 12,
        distance: "2 min",
        lat: 43.4681,
        lng: -79.6971,
      },
      {
        name: "Lot B",
        availableSpaces: 4,
        distance: "5 min",
        lat: 43.4692,
        lng: -79.6955,
      },
      {
        name: "Lot C",
        availableSpaces: 20,
        distance: "1 min",
        lat: 43.4678,
        lng: -79.6897,
      },
    ];

    for (const lot of defaultLots) {
      const existingLot = await (await import("./lotModel")).default.findOne({ name: lot.name });
      if (!existingLot) {
        const Lot = (await import("./lotModel")).default;
        const newLot = new Lot(lot);
        await newLot.save();
      }
    }

    console.log("✅ Default lots initialized");
  } catch (error) {
    console.error("❌ Error initializing default data:", error);
  }
};
