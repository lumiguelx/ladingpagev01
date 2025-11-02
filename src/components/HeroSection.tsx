import { MapPin } from 'lucide-react';

function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-blue-50 to-red-50 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-blue-600">Super Yama:</span>{' '}
              <span className="text-gray-800">
                Suas compras com carinho, sem sair de casa.
              </span>
            </h1>

            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras porttitor lorem
              ipsum, at tempus eros facilisis nec.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('ofertas')}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
              >
                Ver Ofertas da Semana
              </button>
              <button
                onClick={() => scrollToSection('delivery')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Peça pelo WhatsApp
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-blue-600" size={24} />
                <input
                  type="text"
                  placeholder="Digite seu endereço..."
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Entrega
                </button>
                <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                  Retirada
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-red-400 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-sm">
                    Imagem de produtos
                    <br />
                    ou corredor do supermercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
