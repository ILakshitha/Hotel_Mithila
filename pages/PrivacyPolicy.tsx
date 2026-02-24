import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-villa-cream pt-32 pb-20">
      <SEO title="Privacy Policy | The Breath Villa" description="Privacy policy for The Breath Villa, Unawatuna, Sri Lanka." />
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-heading font-light text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Privacy Policy</h1>
        <p className="text-villa-deep/50 text-sm mb-12">Last updated: January 1, 2025</p>

        <div className="prose prose-lg max-w-none text-villa-deep/80 space-y-8">
          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>1. Information We Collect</h2>
            <p>The Breath Villa ("we," "us," or "our") collects personal information that you voluntarily provide when making a booking inquiry or contacting us, including your name, email address, phone number, and travel dates.</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>2. How We Use Your Information</h2>
            <p>We use your information solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm and manage your villa booking</li>
              <li>Communicate with you about your stay</li>
              <li>Arrange airport pickup and special requests</li>
              <li>Send stay-related updates and confirmations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. We do not sell, trade, or share your information with third parties except as required to fulfil your booking (e.g., transport providers).</p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-medium text-villa-deep mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>4. Contact</h2>
            <p>For privacy-related questions, please contact us at <a href="mailto:hello@thebreathvilla.com" className="text-villa-ocean hover:underline">hello@thebreathvilla.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/" className="text-villa-ocean hover:text-villa-deep transition-colors text-sm font-medium">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;