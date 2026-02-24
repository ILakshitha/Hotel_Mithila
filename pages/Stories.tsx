import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Send, User, CheckCircle2, Camera } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { IMAGES } from '../constants/images';
import { Link } from 'react-router-dom';

const galleryItems = [
  { key: 'exterior', src: IMAGES.gallery.exterior, label: 'Villa Exterior', category: 'Villa' },
  { key: 'pool', src: IMAGES.gallery.pool, label: 'Private Pool', category: 'Pool' },
  { key: 'poolSunset', src: IMAGES.gallery.poolSunset, label: 'Pool at Sunset', category: 'Pool' },
  { key: 'poolLounger', src: IMAGES.gallery.poolLounger, label: 'Pool Deck', category: 'Pool' },
  { key: 'beach', src: IMAGES.gallery.beach, label: 'Unawatuna Beach', category: 'Beach' },
  { key: 'coast', src: IMAGES.gallery.coast, label: 'Tropical Coast', category: 'Beach' },
  { key: 'sunset', src: IMAGES.gallery.sunset, label: 'Sunset View', category: 'Beach' },
  { key: 'ocean', src: IMAGES.gallery.ocean, label: 'Ocean Waves', category: 'Beach' },
  { key: 'master', src: IMAGES.gallery.master, label: 'Ocean Suite', category: 'Rooms' },
  { key: 'bedroom', src: IMAGES.gallery.bedroom, label: 'Beach Garden Room', category: 'Rooms' },
  { key: 'garden', src: IMAGES.gallery.garden, label: 'Garden Suite', category: 'Rooms' },
  { key: 'living', src: IMAGES.gallery.living, label: 'Open Plan Living', category: 'Rooms' },
  { key: 'bathroom', src: IMAGES.gallery.bathroom, label: 'Luxury Bathroom', category: 'Rooms' },
  { key: 'breakfast', src: IMAGES.gallery.breakfast, label: 'Tropical Breakfast', category: 'Villa' },
  { key: 'palms', src: IMAGES.gallery.palms, label: 'Tropical Gardens', category: 'Villa' },
  { key: 'galle', src: IMAGES.gallery.galle, label: 'Galle Fort', category: 'Explore' },
];

const categories = ['All', 'Villa', 'Pool', 'Beach', 'Rooms', 'Explore'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', from: '', text: '', rating: 5 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(g => g.category === activeCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    setForm({ name: '', from: '', text: '', rating: 5 });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-villa-cream pt-24 md:pt-32 pb-12">
      <SEO
        title="Gallery | The Breath Villa – Unawatuna, Sri Lanka"
        description="Browse photos of The Breath Villa — our private pool, ocean views, luxury rooms, and Unawatuna Beach. Your paradise awaits."
      />
      <div className="container mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-villa-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Gallery</span>
            <h1 className="text-4xl md:text-7xl font-heading font-light text-villa-deep mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>See Your Paradise</h1>
            <p className="max-w-2xl mx-auto text-xl text-villa-deep/60 leading-relaxed">
              Browse through our villa, pool, beach, and rooms. Every photo tells the same story — you, at peace.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all ${activeCategory === cat
                  ? 'bg-villa-ocean text-white shadow-md'
                  : 'bg-white text-villa-deep/60 hover:text-villa-deep border border-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mb-24">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.key}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="mb-4 break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm"
                onClick={() => setLightboxSrc(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-villa-deep/0 group-hover:bg-villa-deep/40 transition-all duration-300 flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                    <p className="text-white/60 text-xs">{item.category}</p>
                  </div>
                  <Camera size={20} className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-80 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxSrc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxSrc(null)}
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={lightboxSrc}
                alt="Gallery"
                className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
              <button className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl"
                onClick={() => setLightboxSrc(null)}>×</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guest Reviews Sidebar Layout */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Reviews Grid */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-heading font-light text-villa-deep mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Guest Reviews</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: "Isabelle D.", from: "France", rating: 5, text: "The pool is everything. We barely left. But when we did — Unawatuna Beach was just a stroll away. This place is a dream." },
                { name: "Ravi & Priya", from: "Singapore", rating: 5, text: "Our anniversary stay. Woke up to tropical birds, had the best hoppers of our lives, and floated in the pool till sunset." },
                { name: "Tom H.", from: "Australia", rating: 5, text: "The Ocean Suite views are unreal. I've done a lot of luxury travel and this villa competes with the best." },
                { name: "Yuki M.", from: "Japan", rating: 5, text: "I came alone to rest and reset. The Breath Villa gave me exactly that. Quiet, beautiful, and deeply calming." },
                { name: "Clara & Ben", from: "Germany", rating: 5, text: "The breakfast spread was unbelievable. Coconut roti, fresh fruit, strong Sri Lankan tea. We were in heaven." },
                { name: "Sarah L.", from: "UK", rating: 5, text: "Booked for a week, stayed 10 days. The hosts were incredibly kind and the villa felt like a home, not a hotel." },
              ].map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-villa-cream overflow-hidden shrink-0">
                      <img src={`https://randomuser.me/api/portraits/${idx % 2 === 0 ? 'women' : 'men'}/${idx * 7 + 2}.jpg`} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-villa-deep">{review.name}</h3>
                      <p className="text-xs text-villa-deep/50 uppercase tracking-wide">{review.from}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < review.rating ? "fill-villa-sand text-villa-sand" : "text-gray-200"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-villa-charcoal/80 leading-relaxed italic flex-grow">"{review.text}"</p>
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-villa-deep/40 text-xs font-bold uppercase tracking-widest">
                    <CheckCircle2 size={14} />
                    <span>Verified Guest</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Share Your Story Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-villa-deep text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-villa-ocean rounded-full blur-[80px] opacity-10 pointer-events-none" />

                <h2 className="text-2xl font-heading font-medium mb-2 relative z-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Share Your Stay</h2>
                <p className="text-white/60 text-sm mb-8 relative z-10">Inspire future guests with your experience at The Breath Villa.</p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white/10 rounded-xl p-6 text-center border border-white/20 relative z-10"
                    >
                      <div className="w-16 h-16 bg-villa-ocean rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                      <p className="text-white/70 text-sm">Your review has been submitted. We'll publish it after a quick review.</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 text-xs font-bold uppercase tracking-widest text-villa-sand hover:text-white transition-colors"
                      >
                        Submit Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 relative z-10"
                    >
                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-villa-sand ml-1 mb-1 block">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                          <input
                            type="text"
                            className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-villa-ocean transition-colors"
                            placeholder="e.g. Sophie L."
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-villa-sand ml-1 mb-1 block">Country</label>
                        <input
                          type="text"
                          className="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-villa-ocean transition-colors"
                          placeholder="e.g. France, Australia..."
                          value={form.from}
                          onChange={e => setForm({ ...form, from: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-villa-sand ml-1 mb-1 block">Rating</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map(star => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setForm({ ...form, rating: star })}
                              className={`p-2 rounded-lg transition-colors ${form.rating >= star ? 'bg-villa-sand text-villa-deep' : 'bg-white/10 text-white/30'}`}
                            >
                              <Star size={20} className={form.rating >= star ? 'fill-villa-deep' : ''} />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-villa-sand ml-1 mb-1 block">Your Experience</label>
                        <textarea
                          rows={4}
                          className="w-full bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-villa-ocean transition-colors resize-none"
                          placeholder="What did you love most about your stay?"
                          value={form.text}
                          onChange={e => setForm({ ...form, text: e.target.value })}
                          required
                        />
                      </div>

                      <Button variant="lime" fullWidth className="mt-4 gap-2 bg-villa-ocean text-white border-villa-ocean hover:bg-villa-ocean/90">
                        Submit Review <Send size={16} />
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Book CTA */}
              <div className="mt-6 bg-villa-sand/20 border border-villa-sand/30 rounded-2xl p-6 text-center">
                <p className="text-villa-deep font-heading text-lg mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Love what you see?</p>
                <Link to="/booking">
                  <Button className="bg-villa-ocean text-white border-villa-ocean hover:bg-villa-ocean/90 w-full gap-2">
                    Book Your Stay
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;