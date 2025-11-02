import { Instagram, Facebook, MapPin, Clock, Phone } from 'lucide-react';

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Super Yama</span>
              <br />
              <span className="text-red-400">Supermercados</span>
            </div>
            <p className="text-gray-400 mb-4">
              Qualidade e carinho em cada compra
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ofertas')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ofertas da Semana
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('delivery')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Delivery (WhatsApp)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('localizacao')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Localização
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-400">(11) 9999-9999</p>
                  <p className="text-gray-400">(11) 99999-9999</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-red-400" />
                <p className="text-gray-400">
                  Rua Exemplo, 123
                  <br />
                  São Paulo - SP
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horário</h3>
            <div className="flex items-start gap-2">
              <Clock size={18} className="mt-1 text-blue-400" />
              <div className="text-gray-400 space-y-1">
                <p>
                  <strong className="text-white">Seg - Sáb:</strong> 8h às 22h
                </p>
                <p>
                  <strong className="text-white">Domingo:</strong> 8h às 20h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Super Yama Supermercados. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
