import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Mail, Phone, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Booking: React.FC = () => {
  const location = useLocation();
  const state = location.state as { room?: string } | null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: state?.room || 'Ocean Suite',
    requests: ''
  });

  const [errors, setErrors] = useState<{ phone?: string, checkIn?: string, checkOut?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validate = () => {
    const newErrors: { phone?: string, checkIn?: string, checkOut?: string } = {};
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-villa-cream pt-24 md:pt-32 pb-12">
      <SEO
        title="Book Your Stay | The Breath Villa – Unawatuna, Sri Lanka"
        description="Reserve your luxury villa experience in Unawatuna, Galle, Sri Lanka. Private pool, ocean views, and tropical hospitality await."
      />
      <div className="container mx-auto px-4 md:px-8">

        <div className="text-center mb-16">
          <span className="text-villa-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Reservations</span>
          <h1 className="text-4xl md:text-6xl font-heading font-light text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Book Your Stay</h1>
          <p className="text-villa-deep/60 text-lg">Reserve your private sanctuary in Unawatuna. We'll confirm within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-villa-deep text-white p-8 md:p-10 rounded-[2rem] shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-villa-ocean rounded-full blur-[60px] opacity-20" />

              <h2 className="text-2xl font-heading font-medium mb-2 relative z-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>The Breath Villa</h2>
              <p className="text-villa-cream/50 text-xs uppercase tracking-widest mb-8 relative z-10">Unawatuna · Galle · Sri Lanka</p>

              <div className="space-y-6 relative z-10 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-villa-sand shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-0.5">Address</p>
                    <p className="text-white/60">Unawatuna, Galle<br />Sri Lanka 80600</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-green-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-0.5">WhatsApp</p>
                    <a href="https://wa.me/94771234567" className="text-green-400 hover:text-green-300 transition-colors">+94 77 123 4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-villa-sand shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-0.5">Phone</p>
                    <p className="text-white/60">+94 91 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-villa-sand shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-0.5">Email</p>
                    <p className="text-white/60">hello@thebreathvilla.com</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3">What's Included</p>
                  {["Private pool access", "Daily Sri Lankan breakfast", "Free high-speed WiFi", "Airport transfer (3+ nights)", "24/7 host support"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70 mb-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-villa-sand" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Rate Card */}
            <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-villa-deep/40 mb-4">Room Rates</p>
              {[
                { room: "Breeze Studio", rate: "$120/night" },
                { room: "Beach Garden Room", rate: "$140/night" },
                { room: "Ocean Suite", rate: "$185/night" },
                { room: "Garden Suite", rate: "$220/night" },
              ].map((r, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-gray-100 last:border-0">
                  <span className="text-villa-deep/70">{r.room}</span>
                  <span className="font-bold text-villa-deep">{r.rate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <div className="w-24 h-24 bg-villa-ocean rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={48} className="text-white" />
                </div>
                <h2 className="text-3xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Booking Request Received!</h2>
                <p className="text-lg text-villa-deep/60 max-w-md mb-8">
                  Thank you, <span className="font-bold text-villa-deep">{formData.name}</span>! We'll confirm your stay at The Breath Villa within 24 hours via <span className="font-bold text-villa-deep">{formData.email}</span>.
                </p>
                <p className="text-sm text-villa-deep/40 mb-6">Check-in: {formData.checkIn} · Check-out: {formData.checkOut} · {formData.guests} guests</p>
                <Link to="/">
                  <Button variant="outline" className="border-villa-deep text-villa-deep hover:bg-villa-deep hover:text-white">Return Home</Button>
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-medium text-villa-deep mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Reservation Details</h2>
                  <p className="text-villa-deep/50 text-sm">Fill in your details and we'll be in touch within 24 hours.</p>
                </div>

                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text" name="name"
                      value={formData.name} onChange={handleChange} required
                      className="w-full bg-villa-cream border-transparent focus:bg-white border-2 focus:border-villa-ocean rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep placeholder:text-gray-400"
                      placeholder="e.g. Jane Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Phone / WhatsApp</label>
                    <input
                      type="tel" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className={`w-full bg-villa-cream border-transparent focus:bg-white border-2 rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep placeholder:text-gray-400 ${errors.phone ? 'border-red-400 focus:border-red-400' : 'focus:border-villa-ocean'}`}
                      placeholder="+44 7911 123456"
                    />
                    {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1 ml-1"><AlertCircle size={12} /> {errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Room */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      className="w-full bg-villa-cream border-transparent focus:bg-white border-2 focus:border-villa-ocean rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep placeholder:text-gray-400"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Room Type</label>
                    <div className="relative">
                      <select
                        name="room" value={formData.room} onChange={handleChange}
                        className="w-full bg-villa-cream border-transparent focus:bg-white border-2 focus:border-villa-ocean rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep appearance-none cursor-pointer"
                      >
                        <option>Ocean Suite ($185/night)</option>
                        <option>Beach Garden Room ($140/night)</option>
                        <option>Garden Suite ($220/night)</option>
                        <option>Breeze Studio ($120/night)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <MapPin size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Check-in / Check-out / Guests */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Check-In Date</label>
                    <div className="relative">
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                      <input
                        type="date" name="checkIn"
                        value={formData.checkIn} onChange={handleChange}
                        className={`w-full bg-villa-cream border-transparent focus:bg-white border-2 rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep cursor-pointer ${errors.checkIn ? 'border-red-400 focus:border-red-400' : 'focus:border-villa-ocean'}`}
                      />
                    </div>
                    {errors.checkIn && <p className="text-red-500 text-xs flex items-center gap-1 ml-1"><AlertCircle size={12} /> {errors.checkIn}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Check-Out Date</label>
                    <div className="relative">
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                      <input
                        type="date" name="checkOut"
                        value={formData.checkOut} onChange={handleChange}
                        className={`w-full bg-villa-cream border-transparent focus:bg-white border-2 rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep cursor-pointer ${errors.checkOut ? 'border-red-400 focus:border-red-400' : 'focus:border-villa-ocean'}`}
                      />
                    </div>
                    {errors.checkOut && <p className="text-red-500 text-xs flex items-center gap-1 ml-1"><AlertCircle size={12} /> {errors.checkOut}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                      <select
                        name="guests" value={formData.guests} onChange={handleChange}
                        className="w-full bg-villa-cream border-transparent focus:bg-white border-2 focus:border-villa-ocean rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6].map(n => <option key={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-villa-deep uppercase tracking-widest ml-1">Special Requests</label>
                  <textarea
                    name="requests" value={formData.requests} onChange={handleChange}
                    rows={4}
                    className="w-full bg-villa-cream border-transparent focus:bg-white border-2 focus:border-villa-ocean rounded-xl outline-none px-6 py-4 transition-all font-medium text-villa-deep placeholder:text-gray-400 resize-none"
                    placeholder="Airport pickup, romantic setup, dietary requirements, early check-in..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button type="submit" fullWidth variant="lime" className="py-5 text-lg shadow-xl hover:shadow-2xl bg-villa-ocean text-white border-villa-ocean hover:bg-villa-ocean/90">
                    Send Booking Request
                  </Button>
                  <p className="text-center text-xs text-villa-charcoal/50 mt-6">
                    We'll confirm your booking within 24 hours. No payment required at this stage.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;