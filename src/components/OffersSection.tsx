import { useState } from 'react';
import { X } from 'lucide-react';

function OffersSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="ofertas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Confira Nossas{' '}
            <span className="text-red-600">Ofertas da Semana!</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Promoções imperdíveis para você economizar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div
            onClick={() => setSelectedImage('frente')}
            className="bg-gray-100 rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-shadow aspect-[3/4] flex items-center justify-center group"
          >
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                📄
              </div>
              <p className="text-lg font-semibold">Frente do Panfleto</p>
              <p className="text-sm mt-2">Clique para ampliar</p>
            </div>
          </div>

          <div
            onClick={() => setSelectedImage('verso')}
            className="bg-gray-100 rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-shadow aspect-[3/4] flex items-center justify-center group"
          >
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                📄
              </div>
              <p className="text-lg font-semibold">Verso do Panfleto</p>
              <p className="text-sm mt-2">Clique para ampliar</p>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="max-w-4xl w-full bg-gray-100 rounded-lg p-8 aspect-[3/4] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-8xl mb-4">📄</div>
              <p className="text-2xl font-semibold">
                {selectedImage === 'frente'
                  ? 'Frente do Panfleto'
                  : 'Verso do Panfleto'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default OffersSection;
