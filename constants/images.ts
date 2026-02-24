// Centralized Image Assets – The Breath Villa
// All images sourced from Unsplash

const RAW_IMAGES = {
    // Hero & Villa Exteriors
    heroVilla: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop",
    villaExterior: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2680&auto=format&fit=crop",
    villaOceanView: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop",
    villaPool: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=2687&auto=format&fit=crop",
    villaNight: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop",

    // Pool
    poolDaylight: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=2670&auto=format&fit=crop",
    poolSunset: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=2747&auto=format&fit=crop",
    poolLounger: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop",

    // Beach & Ocean
    unawatunaBeach: "https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=2574&auto=format&fit=crop",
    tropicalCoast: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop",
    sunsetCoast: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2670&auto=format&fit=crop",
    oceanWaves: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2626&auto=format&fit=crop",

    // Rooms & Interiors
    masterBedroom: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2670&auto=format&fit=crop",
    beachBedroom: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2670&auto=format&fit=crop",
    gardenSuite: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop",
    studioRoom: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2600&auto=format&fit=crop",
    bathroomLuxury: "https://images.unsplash.com/photo-1552321554-5f6b59ac3e16?q=80&w=2587&auto=format&fit=crop",
    openPlanLiving: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",

    // Tropical & Garden
    tropicalGarden: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2670&auto=format&fit=crop",
    palmTrees: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2304&auto=format&fit=crop",
    tropicalBreakfast: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2747&auto=format&fit=crop",

    // Sri Lanka / Galle
    galleHarbour: "https://images.unsplash.com/photo-1588598198321-9735fd62dc16?q=80&w=2670&auto=format&fit=crop",
    sriLankaLandscape: "https://images.unsplash.com/photo-1555400038-063f4a926d79?q=80&w=2670&auto=format&fit=crop",
};

export const IMAGES = {
    home: {
        hero: RAW_IMAGES.heroVilla,
        steps: {
            arrival: RAW_IMAGES.villaExterior,
            pool: RAW_IMAGES.poolDaylight,
            beach: RAW_IMAGES.unawatunaBeach,
            relax: RAW_IMAGES.openPlanLiving,
        },
        bento: {
            villa: RAW_IMAGES.villaOceanView,
        }
    },
    rooms: {
        ocean: [RAW_IMAGES.masterBedroom, RAW_IMAGES.bathroomLuxury, RAW_IMAGES.villaOceanView],
        beach: [RAW_IMAGES.beachBedroom, RAW_IMAGES.tropicalCoast, RAW_IMAGES.unawatunaBeach],
        garden: [RAW_IMAGES.gardenSuite, RAW_IMAGES.tropicalGarden, RAW_IMAGES.poolLounger],
        studio: [RAW_IMAGES.studioRoom, RAW_IMAGES.openPlanLiving, RAW_IMAGES.bathroomLuxury],
    },
    gallery: {
        exterior: RAW_IMAGES.villaExterior,
        pool: RAW_IMAGES.poolDaylight,
        poolSunset: RAW_IMAGES.poolSunset,
        poolLounger: RAW_IMAGES.poolLounger,
        beach: RAW_IMAGES.unawatunaBeach,
        coast: RAW_IMAGES.tropicalCoast,
        sunset: RAW_IMAGES.sunsetCoast,
        ocean: RAW_IMAGES.oceanWaves,
        master: RAW_IMAGES.masterBedroom,
        bedroom: RAW_IMAGES.beachBedroom,
        garden: RAW_IMAGES.gardenSuite,
        living: RAW_IMAGES.openPlanLiving,
        bathroom: RAW_IMAGES.bathroomLuxury,
        breakfast: RAW_IMAGES.tropicalBreakfast,
        palms: RAW_IMAGES.palmTrees,
        galle: RAW_IMAGES.galleHarbour,
    },
    avatars: {
        get: (gender: 'men' | 'women', id: number) => `https://randomuser.me/api/portraits/${gender}/${id}.jpg`,
    }
};