import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Clock } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-villa-cream">
      <SEO
        title="Contact | The Breath Villa – Unawatuna, Galle, Sri Lanka"
        description="Get in touch with The Breath Villa in Unawatuna, Galle, Sri Lanka. Contact us via WhatsApp, email, or phone to plan your luxurious tropical escape."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-villa-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Find Us</span>
            <h1 className="text-5xl md:text-7xl font-heading font-light text-villa-deep mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Get in Touch</h1>
            <p className="max-w-2xl mx-auto text-xl text-villa-deep/60 leading-relaxed">
              Questions about your stay? Reach us directly via WhatsApp for the fastest response. We'd love to host you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Card with Map */}
      <section className="pb-24 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-4 md:p-6 shadow-sm border border-gray-100"
          >
            <div className="grid lg:grid-cols-12 gap-6 items-stretch">

              {/* Details */}
              <div className="lg:col-span-4 p-6 md:p-10 flex flex-col justify-center">
                <div className="inline-block bg-villa-ocean/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-villa-ocean mb-6 w-fit">
                  The Breath Villa
                </div>
                <h2 className="text-4xl font-heading font-light text-villa-deep mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Unawatuna,<br />Galle</h2>

                <div className="space-y-6 text-villa-charcoal/80">
                  <div className="flex items-start gap-4">
                    <div className="bg-villa-cream p-3 rounded-full shrink-0">
                      <MapPin className="w-5 h-5 text-villa-ocean" />
                    </div>
                    <div>
                      <p className="font-bold text-villa-deep">Address</p>
                      <p>Unawatuna, Galle</p>
                      <p>Sri Lanka 80600</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-full shrink-0">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-villa-deep">WhatsApp</p>
                      <a
                        href="https://wa.me/94771234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors font-medium"
                      >
                        +94 77 123 4567
                      </a>
                      <p className="text-xs text-villa-deep/40 mt-0.5">Fastest response method</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-villa-cream p-3 rounded-full shrink-0">
                      <Phone className="w-5 h-5 text-villa-ocean" />
                    </div>
                    <div>
                      <p className="font-bold text-villa-deep">Phone</p>
                      <p>+94 91 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-villa-cream p-3 rounded-full shrink-0">
                      <Mail className="w-5 h-5 text-villa-ocean" />
                    </div>
                    <div>
                      <p className="font-bold text-villa-deep">Email</p>
                      <a href="mailto:hello@thebreathvilla.com" className="hover:text-villa-ocean transition-colors">
                        hello@thebreathvilla.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-villa-cream p-3 rounded-full shrink-0">
                      <Clock className="w-5 h-5 text-villa-ocean" />
                    </div>
                    <div>
                      <p className="font-bold text-villa-deep">Response Time</p>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 space-y-3">
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                  <Link to="/booking">
                    <Button variant="outline" fullWidth className="gap-2 group border-villa-deep text-villa-deep hover:bg-villa-deep hover:text-white">
                      Book Your Stay <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Map - Unawatuna, Galle, Sri Lanka */}
              <div className="lg:col-span-8 min-h-[450px] lg:min-h-full rounded-[2.5rem] overflow-hidden relative bg-villa-deep/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1236547890!2d80.24902!3d6.00952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173e1e9e6a4eb%3A0x62fbc4d5f1736f6e!2sUnawatuna%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="The Breath Villa Location – Unawatuna, Galle, Sri Lanka"
                ></iframe>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="pb-24 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-light text-villa-deep mb-10 text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Nearby Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Unawatuna Beach", distance: "5 min walk", emoji: "🏖️", desc: "Sri Lanka's most popular beach" },
              { name: "Galle Fort", distance: "8 min drive", emoji: "🏰", desc: "UNESCO World Heritage Site" },
              { name: "Jungle Beach", distance: "15 min drive", emoji: "🌿", desc: "Hidden gem for snorkelling" },
              { name: "Mirissa Beach", distance: "30 min drive", emoji: "🐬", desc: "Whale watching & surf" },
            ].map((spot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-3 block">{spot.emoji}</span>
                <h3 className="font-bold text-villa-deep mb-1">{spot.name}</h3>
                <p className="text-xs text-villa-ocean font-semibold uppercase tracking-widest mb-2">{spot.distance}</p>
                <p className="text-villa-deep/60 text-sm">{spot.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-villa-deep text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Have a question? We're just a message away.</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">Whether it's about your room, the best time to visit, or local tips — our hosts are here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-8 bg-green-500 text-white rounded-full font-semibold hover:bg-green-400 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@thebreathvilla.com"
              className="flex items-center justify-center gap-2 py-3 px-8 bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Mail size={18} />
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;