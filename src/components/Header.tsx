import { Instagram, Facebook } from 'lucide-react';

function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-blue-600">Super Yama</span>{' '}
              <span className="text-red-600">Supermercados</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('ofertas')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Ofertas da Semana
            </button>
            <button
              onClick={() => scrollToSection('delivery')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Delivery (WhatsApp)
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Localização
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
