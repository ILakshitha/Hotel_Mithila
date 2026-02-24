import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Waves, Wind, Wifi, Car, Coffee, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';

const rooms = [
  {
    id: "ocean",
    badge: "Most Popular",
    title: "Ocean Suite",
    subtitle: "Wake up to the Indian Ocean.",
    description: "Our signature suite opens directly onto a private terrace with sweeping ocean views. Floor-to-ceiling glass doors merge the indoors with the sound of waves. King bed with premium linens, rain shower, and a dedicated sun deck with pool access.",
    pricePerNight: 185,
    capacity: "2 guests",
    size: "65 m²",
    features: [
      "Private ocean-view terrace",
      "King bed with premium linens",
      "Marble rain shower",
      "Direct pool access",
      "Mini bar & Nespresso",
      "Free high-speed WiFi"
    ],
    images: IMAGES.rooms.ocean
  },
  {
    id: "beach",
    title: "Beach Garden Room",
    subtitle: "Tropical garden meets beachside calm.",
    description: "Surrounded by lush tropical foliage, this garden-facing room offers a peaceful retreat with a private outdoor shower, bathtub, and a hammock terrace. A 5-minute stroll leads you to Unawatuna Beach.",
    pricePerNight: 140,
    capacity: "2 guests",
    size: "50 m²",
    features: [
      "Private garden hammock terrace",
      "Outdoor rain shower & bathtub",
      "King or twin bed configuration",
      "Garden & pool views",
      "Complimentary breakfast",
      "Free WiFi"
    ],
    images: IMAGES.rooms.beach
  },
  {
    id: "garden",
    title: "Garden Suite",
    subtitle: "Your own tropical hideaway.",
    description: "A secluded retreat wrapped in tropical greenery. With a private plunge pool, open-air bathroom, and a spacious living area, this suite is designed for couples seeking total privacy and calm.",
    pricePerNight: 220,
    capacity: "2 guests",
    size: "80 m²",
    features: [
      "Private plunge pool",
      "Open-air jungle bathroom",
      "Spacious living room",
      "Daybed & wraparound deck",
      "In-suite breakfast option",
      "Butler service available"
    ],
    images: IMAGES.rooms.garden
  },
  {
    id: "studio",
    title: "Breeze Studio",
    subtitle: "Modern. Minimal. Refreshing.",
    description: "A thoughtfully designed compact studio perfect for solo travellers or couples on a budget. Clean lines, tropical textures, and shared pool access make this our most accessible and cheerful room.",
    pricePerNight: 120,
    capacity: "1–2 guests",
    size: "35 m²",
    features: [
      "Queen bed with sea-breeze ventilation",
      "Ensuite bathroom with rain shower",
      "Shared pool access",
      "Desk & reading nook",
      "Daily breakfast included",
      "Free WiFi"
    ],
    images: IMAGES.rooms.studio
  }
];

const amenities = [
  { icon: <Waves size={28} />, name: "Private Pool" },
  { icon: <Wind size={28} />, name: "Ocean Breeze" },
  { icon: <Wifi size={28} />, name: "Free WiFi" },
  { icon: <Car size={28} />, name: "Airport Transfer" },
  { icon: <Coffee size={28} />, name: "Daily Breakfast" },
  { icon: <Star size={28} />, name: "24/7 Host Support" },
];

const Rooms: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: string]: number }>({});

  const setImage = (roomId: string, idx: number) => {
    setActiveImageIndex(prev => ({ ...prev, [roomId]: idx }));
  };

  return (
    <div className="min-h-screen bg-villa-cream">
      <SEO
        title="Rooms & Suites | The Breath Villa – Unawatuna, Sri Lanka"
        description="Choose from our Ocean Suite, Beach Garden Room, Garden Suite, and Breeze Studio. Private pool, tropical breakfasts, and ocean views await."
      />

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-villa-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Accommodation</span>
            <h1 className="text-5xl md:text-7xl font-heading font-light text-villa-deep mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Rooms & Suites</h1>
            <p className="max-w-2xl text-xl text-villa-deep/60 leading-relaxed">
              Each room at The Breath Villa is a unique sanctuary — designed with tropical textures, ocean light, and your comfort in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Villa-wide Amenities */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="bg-villa-deep rounded-[2rem] p-8 md:p-12">
            <p className="text-villa-sand text-xs font-bold uppercase tracking-widest mb-6">Included for All Guests</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {amenities.map((a, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-full bg-villa-ocean/20 flex items-center justify-center text-villa-sand">
                    {a.icon}
                  </div>
                  <p className="text-white text-sm font-medium">{a.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Rooms Sections */}
      <div className="space-y-24 pb-32 px-4 md:px-6">
        {rooms.map((room, index) => (
          <section id={room.id} key={room.id} className="container mx-auto scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-start">

                {/* Text Content */}
                <div className="lg:col-span-5 flex flex-col h-full">
                  {room.badge && (
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-villa-ocean bg-villa-ocean/10 px-3 py-1.5 rounded-full w-fit mb-4">
                      <Star size={12} className="fill-villa-ocean" /> {room.badge}
                    </span>
                  )}

                  <h2 className="text-3xl md:text-4xl font-heading font-medium text-villa-deep mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{room.title}</h2>
                  <p className="text-villa-ocean font-medium mb-6 text-lg">{room.subtitle}</p>

                  <div className="flex gap-6 mb-6 text-sm text-villa-deep/60">
                    <span>👥 {room.capacity}</span>
                    <span>📐 {room.size}</span>
                    <span className="text-villa-deep font-bold text-lg ml-auto">
                      ${room.pricePerNight}<span className="text-sm font-normal text-villa-deep/50">/night</span>
                    </span>
                  </div>

                  <div className="prose prose-lg text-villa-charcoal/70 mb-8">
                    <p className="leading-relaxed">{room.description}</p>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-villa-deep mb-4">Room Includes</h3>
                    <ul className="space-y-3">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-villa-deep/80">
                          <CheckCircle2 size={18} className="text-villa-ocean shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link to="/booking" state={{ room: room.title }}>
                      <Button variant="outline" className="w-full md:w-auto gap-2 group border-villa-deep text-villa-deep hover:bg-villa-deep hover:text-white">
                        Book This Room <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Images Layout */}
                <div className="lg:col-span-7 h-full min-h-[450px]">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="col-span-2 md:col-span-1 md:row-span-2 h-[300px] md:h-full relative group">
                      <img
                        src={room.images[0]}
                        alt={room.title}
                        className="w-full h-full object-cover rounded-[2rem]"
                      />
                    </div>
                    <div className="col-span-1 h-[180px] md:h-auto">
                      <img
                        src={room.images[1]}
                        alt="Room detail"
                        className="w-full h-full object-cover rounded-[2rem]"
                      />
                    </div>
                    <div className="col-span-1 h-[180px] md:h-auto">
                      <img
                        src={room.images[2]}
                        alt="Room environment"
                        className="w-full h-full object-cover rounded-[2rem]"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </section>
        ))}
      </div>

      {/* Book CTA */}
      <section className="py-20 bg-villa-ocean text-white px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Ready to escape?</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">Rates from $120/night. Free breakfast and airport pickup included for 3+ night stays.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/booking">
              <Button className="bg-white text-villa-ocean px-12 py-4 h-auto rounded-full gap-2 hover:bg-villa-cream">
                Book Your Stay <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white/20 border border-white/30 text-white px-12 py-4 h-auto rounded-full hover:bg-white/30">
                Ask a Question
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;