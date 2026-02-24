import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-villa-cream pt-32 pb-20">
      <SEO title="Terms of Service | The Breath Villa" description="Terms and conditions for booking and staying at The Breath Villa, Unawatuna, Sri Lanka." />
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-light text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Terms of Service</h1>
        <p className="text-villa-deep/50 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="prose prose-lg max-w-none text-villa-deep/80 space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>1. Bookings & Reservations</h2>
            <p>A booking at The Breath Villa is confirmed upon receipt of a deposit (50% of total stay value). The remaining balance is due 30 days before check-in. Booking requests submitted via our website are subject to availability and confirmation by our team.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>2. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>30+ days before check-in:</strong> Full deposit refund</li>
              <li><strong>15–29 days before check-in:</strong> 50% deposit refund</li>
              <li><strong>Less than 14 days:</strong> No refund</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3. House Rules</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check-in: 2:00 PM · Check-out: 11:00 AM</li>
              <li>No smoking inside the villa</li>
              <li>Parties and events require prior approval</li>
              <li>Pets not permitted unless arranged in advance</li>
              <li>Guests are responsible for any damages to villa property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>4. Liability</h2>
            <p>The Breath Villa is not responsible for any personal injury, loss, or damage to guests' personal belongings during their stay. Guests use the pool and villa facilities at their own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>5. Contact</h2>
            <p>For any questions, please email us at <a href="mailto:hello@thebreathvilla.com" className="text-villa-ocean hover:underline">hello@thebreathvilla.com</a> or WhatsApp +94 77 123 4567.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/" className="text-villa-ocean hover:text-villa-deep transition-colors text-sm font-medium">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;