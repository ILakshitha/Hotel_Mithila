import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Wifi, Car, Waves, Star, ChevronDown, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';

const highlights = [
  { icon: <Waves size={22} />, title: "Private Pool", desc: "Your own infinity pool overlooking lush tropical gardens" },
  { icon: <ArrowUpRight size={22} />, title: "Ocean View", desc: "Wake up to breathtaking views of the Indian Ocean" },
  { icon: <MapPin size={22} />, title: "Beach Access", desc: "5-minute walk to pristine Unawatuna Beach" },
  { icon: <Wifi size={22} />, title: "Free WiFi", desc: "High-speed connectivity throughout the villa" },
  { icon: <Car size={22} />, title: "Airport Pickup", desc: "Complimentary transfer from Bandaranaike International" },
];

const experienceSteps = [
  {
    step: "01",
    title: "Arrive & Breathe",
    description: "Step through our tropical gates and feel the day's tension dissolve. Our private arrival experience includes a welcome cocktail on the verandah, villa orientation, and your first sunset over the Indian Ocean.",
    image: IMAGES.home.steps.arrival
  },
  {
    step: "02",
    title: "Dive Into Serenity",
    description: "Your private infinity pool awaits. Suspended above a lush garden canopy with views stretching to the horizon, it's the centerpiece of your days at The Breath Villa. Mornings are yours, evenings are golden.",
    image: IMAGES.home.steps.pool
  },
  {
    step: "03",
    title: "Walk to the Shore",
    description: "Five minutes from our gate is Unawatuna Beach — Sri Lanka's most beloved crescent of golden sand. Snorkel coral reefs, sip a king coconut, or simply lie down and let the Indian Ocean soothe your soul.",
    image: IMAGES.home.steps.beach
  },
  {
    step: "04",
    title: "Rest in Luxury",
    description: "Return to your suite and melt into premium linens, tropical scents, and complete stillness. Our open-plan living spaces blend indoor comfort with outdoor air, keeping you connected to nature at every breath.",
    image: IMAGES.home.steps.relax
  }
];

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out can be arranged based on availability — just let us know in advance and we'll do our best to accommodate you."
  },
  {
    question: "Is the villa suitable for families?",
    answer: "Absolutely! The Breath Villa is perfect for families, couples, and small groups. We can arrange extra beds, a baby cot, and child-friendly amenities. Our private pool is ideal for a safe, relaxing family holiday."
  },
  {
    question: "How far is the villa from Unawatuna Beach?",
    answer: "We are just a 5-minute walk from the main Unawatuna Beach. Our team will point out the best path, and for days when you'd rather stay in — our private pool is always yours."
  },
  {
    question: "Is airport pickup included?",
    answer: "We offer complimentary airport transfer from Bandaranaike International Airport (CMB) for stays of 3 nights or more. For shorter stays, we can arrange a transfer at a nominal fee. Please request this at the time of booking."
  },
  {
    question: "What meals are provided?",
    answer: "A Sri Lankan tropical breakfast is included every morning — fresh fruit, coconut roti, hoppers, eggs, and freshly brewed Ceylon tea or coffee. For other meals, we can arrange a personal chef experience or recommend the best local restaurants in Unawatuna and Galle."
  },
  {
    question: "Can we visit Galle Fort from the villa?",
    answer: "Galle Fort, a UNESCO World Heritage Site, is just an 8-minute drive from the villa. We recommend an early morning or golden-hour walk through the fort's cobblestone streets. Our team can arrange a tuk-tuk or private car for you."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-villa-cream/50 transition-colors px-4 rounded-xl"
      >
        <span className="font-heading font-medium text-lg text-villa-deep group-hover:text-villa-ocean" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className="text-villa-ocean" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 text-villa-deep/70 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-villa-cream">
      <SEO
        title="The Breath Villa | Luxury Private Villa in Unawatuna, Sri Lanka"
        description="Private pool, ocean views & 5-min walk to Unawatuna Beach. Experience luxury tropical living at The Breath Villa, Galle, Sri Lanka."
      />

      {/* Hero Section */}
      <section className="relative h-screen pt-20 md:pt-24 pb-6 px-4 md:px-6 flex flex-col">
        <div className="container mx-auto w-full flex-grow relative rounded-3xl md:rounded-[2.5rem] overflow-hidden group">
          <img
            src={IMAGES.home.hero}
            alt="The Breath Villa – Luxury Villa in Sri Lanka"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70 md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent" />

          <div className="absolute bottom-8 left-6 md:top-20 md:left-12 md:bottom-auto max-w-2xl text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-villa-ocean text-white p-2 rounded-full">
                  <Waves size={18} />
                </div>
                <span className="font-medium tracking-[0.2em] text-sm uppercase text-villa-sand">Unawatuna · Galle · Sri Lanka</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-light leading-none mb-6 tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Breathe the Ocean.<br />
                <span className="italic text-villa-sand">Live the Calm.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg font-light leading-relaxed">
                A private villa sanctuary in Galle's most beautiful bay — your pool, your beach, your pace, your paradise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <Button variant="lime" className="gap-2 bg-villa-ocean text-white border-villa-ocean hover:bg-villa-ocean/90">
                    Book Now <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/rooms">
                  <Button className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-villa-deep">
                    View Rooms
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="fill-villa-sand text-villa-sand" />)}
            </div>
            <p className="text-xs font-bold text-villa-deep uppercase tracking-widest">4.9 / 5 Rating</p>
            <p className="text-xs text-villa-deep/50">200+ happy guests</p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Strip */}
      <section className="py-10 px-4 md:px-6 bg-villa-deep">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-villa-ocean/20 rounded-full flex items-center justify-center text-villa-sand">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="values" className="py-12 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-widest text-villa-deep/50 mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-6xl font-heading font-light text-villa-deep leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Designed for rest.<br />
                <span className="text-villa-deep/40 italic">Made for the soul.</span>
              </h2>
            </div>
            <Link to="/rooms">
              <Button variant="outline" className="rounded-full border-villa-deep text-villa-deep hover:bg-villa-deep hover:text-white">Explore Rooms</Button>
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-min">

            {/* Card 1: Private Pool */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-1 lg:col-span-4 bg-villa-ocean rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[350px]"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-medium text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Private Pool</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Your own infinity pool — no sharing, no schedule. Just you, the water, and the sky.
                </p>
              </div>
              <div className="relative z-10 mt-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-white text-villa-ocean p-3 rounded-full">
                    <Waves size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-white/60">Pool Size</div>
                    <div className="text-2xl font-heading font-medium text-white">12 × 5 m</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-all duration-500 group-hover:scale-150" />
            </motion.div>

            {/* Card 2: Image Focus */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-1 lg:col-span-5 bg-gray-900 rounded-[2rem] overflow-hidden relative group min-h-[350px]"
            >
              <img
                src={IMAGES.home.bento.villa}
                alt="Ocean view from The Breath Villa"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-2 text-villa-sand">
                    <Star fill="currentColor" size={16} />
                    <span className="text-xs font-bold uppercase">Featured Stay</span>
                  </div>
                  <p className="text-2xl font-heading font-medium leading-snug" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"The most peaceful place I've ever slept."</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Rating Stats */}
            <Link to="/gallery" className="md:col-span-2 lg:col-span-3 block h-full">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2rem] p-8 flex flex-col justify-between border border-gray-100 shadow-sm h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase text-gray-400">Guest Rating</span>
                    <div className="bg-villa-cream p-2 rounded-full text-villa-deep">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <div className="text-6xl font-heading font-medium text-villa-deep mb-2">4.9<span className="text-2xl text-gray-400">/5</span></div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-villa-ocean h-full w-[98%]" />
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="p-3 bg-villa-cream rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-villa-ocean" />
                    <span className="text-sm font-medium text-villa-deep">Stunning Views</span>
                  </div>
                  <div className="p-3 bg-villa-cream rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-villa-ocean" />
                    <span className="text-sm font-medium text-villa-deep">Warm Hospitality</span>
                  </div>
                  <div className="p-3 bg-villa-cream rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-villa-ocean" />
                    <span className="text-sm font-medium text-villa-deep">Immaculate Cleanliness</span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 4: Location / Beach */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-2 lg:col-span-6 bg-villa-deep text-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-white/5"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 text-villa-sand">
                  <MapPin size={24} />
                  <span className="text-sm font-bold uppercase tracking-widest">Prime Location</span>
                </div>
                <h3 className="text-3xl font-heading font-medium mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Unawatuna, Galle</h3>
                <p className="text-white/70 mb-6">
                  Steps from Sri Lanka's most celebrated beach. Minutes from Galle Fort, UNESCO World Heritage Site.
                </p>
                <Link to="/contact" className="text-villa-sand border-b border-villa-sand/30 pb-1 hover:border-villa-sand transition-all text-sm">
                  View on map →
                </Link>
              </div>
              <div className="w-full md:w-48 h-40 rounded-2xl overflow-hidden shrink-0">
                <img src={IMAGES.home.steps.beach} alt="Unawatuna Beach" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Card 5: Breakfast Included */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-1 lg:col-span-3 bg-white border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="bg-villa-cream p-4 rounded-full w-fit mb-6">
                <span className="text-2xl">🥥</span>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-medium text-villa-deep mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Sri Lankan Breakfast</h3>
                <p className="text-villa-deep/70 text-sm">Fresh hoppers, tropical fruit, coconut roti, and Ceylon tea included daily.</p>
              </div>
            </motion.div>

            {/* Card 6: Airport Transfer */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-1 lg:col-span-3 bg-white border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-between"
            >
              <div className="bg-villa-cream p-4 rounded-full w-fit mb-6">
                <Car className="text-villa-deep" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-medium text-villa-deep mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Airport Pickup</h3>
                <p className="text-villa-deep/70 text-sm">Complimentary transfer from Colombo airport for stays of 3+ nights.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Experience Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-villa-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Your Stay</span>
            <h2 className="text-4xl md:text-6xl font-heading font-light text-villa-deep" style={{ fontFamily: 'Cormorant Garamond, serif' }}>A Day at The Breath Villa</h2>
            <p className="mt-6 text-xl text-villa-deep/60">From tropical sunrise to ocean-breeze evenings — your days are beautifully, completely yours.</p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {experienceSteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center group`}>
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-villa-deep font-heading font-medium text-xl w-16 h-16 rounded-full flex items-center justify-center border border-white/50 shadow-sm z-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {step.step}
                    </div>
                    <div className="absolute inset-0 bg-villa-deep/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-4xl font-heading font-medium text-villa-deep mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{step.title}</h3>
                    <div className="h-1 w-20 bg-villa-ocean mb-8" />
                    <p className="text-lg md:text-xl text-villa-deep/70 leading-relaxed font-light">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20 bg-villa-deep text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>What Our Guests Say</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Join over 200 guests who have made The Breath Villa their home away from home in Sri Lanka.</p>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll gap-8 hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, listIndex) => (
              <div key={listIndex} className="flex gap-8">
                {[
                  { name: "Sophie & Marc", from: "France", text: "We've stayed in villas across Southeast Asia but The Breath Villa is something else entirely. The private pool, the morning birds, the sound of the ocean — pure magic." },
                  { name: "Ravi K.", from: "Singapore", text: "The breakfast alone was worth the trip. Sri Lankan hospitality at its finest. We're already planning to come back for our anniversary." },
                  { name: "Emma T.", from: "Australia", text: "Unawatuna Beach, 5 minutes away. A private pool, always blue. And a bedroom that felt like a dream. What else do you need?" },
                  { name: "Jonas B.", from: "Germany", text: "The airport pickup was seamless, the wifi was fast, and the staff were incredibly kind. The villa feels personal, not hotel-ish." },
                  { name: "Amara & David", from: "UK", text: "Our honeymoon destination and it exceeded every expectation. Waking up to that view every morning — honestly brought me to tears." },
                  { name: "Yuki S.", from: "Japan", text: "The attention to detail is extraordinary. Fresh flowers daily, perfectly chilled drinks by the pool, and the quietest nights I've ever experienced." },
                ].map((guest, i) => (
                  <div key={i} className="w-[300px] md:w-[400px] bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-villa-ocean/40 overflow-hidden flex items-center justify-center">
                        <img src={`https://randomuser.me/api/portraits/men/${(i + listIndex * 6) * 5 + 1}.jpg`} alt="Guest" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-base font-bold">{guest.name}</div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">{guest.from}</div>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} className="fill-villa-sand text-villa-sand" />)}
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed italic">
                      "{guest.text}"
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-villa-deep">See Gallery</Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-villa-ocean font-bold uppercase tracking-widest text-sm mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-villa-deep mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Everything you need to know</h2>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-villa-deep/60">Still have questions?</p>
            <Link to="/contact" className="text-villa-ocean font-bold border-b-2 border-villa-ocean/40 hover:border-villa-ocean transition-colors mt-2 inline-block">
              Contact us directly
            </Link>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto bg-villa-ocean rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-villa-deep/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-light text-white mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your tropical sanctuary <br /><span className="italic">awaits.</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto">
              From $120 / night · Private pool · Ocean view<br />Free breakfast · Airport pickup available
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking">
                <Button className="bg-white text-villa-ocean px-12 py-4 h-auto text-base rounded-full hover:bg-villa-cream shadow-2xl gap-2">
                  BOOK NOW <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-12 py-4 h-auto text-base rounded-full hover:bg-white/30">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="mt-16 flex justify-center gap-8 text-white/60 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="https://wa.me/94771234567" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;