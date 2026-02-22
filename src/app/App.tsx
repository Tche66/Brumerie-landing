import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { FeaturedProducts } from '@/app/components/FeaturedProducts';
import { LiveShopping } from '@/app/components/LiveShopping';
import { TrustFeatures } from '@/app/components/TrustFeatures';
import { MobileMoneySection } from '@/app/components/MobileMoneySection';
import { ContactForm } from '@/app/components/ContactForm';
import { CTASection } from '@/app/components/CTASection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <LiveShopping />
        <TrustFeatures />
        <MobileMoneySection />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
