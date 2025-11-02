import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OffersSection from './components/OffersSection';
import DeliverySection from './components/DeliverySection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <OffersSection />
      <DeliverySection />
      <LocationSection />
      <Footer />
    </div>
  );
}

export default App;
