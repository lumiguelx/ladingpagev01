import { MessageCircle, Clock, Truck } from 'lucide-react';

function DeliverySection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  return (
    <section id="delivery" className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Delivery <span className="text-blue-600">Fácil e Rápido</span>
          </h2>

          <p className="text-gray-600 text-xl mb-12">
            Faça seu pedido diretamente pelo nosso WhatsApp. Rápido, prático e
            você recebe no conforto da sua casa.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Peça pelo WhatsApp</h3>
              <p className="text-gray-600">Atendimento direto e personalizado</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-red-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Receba suas compras em tempo recorde</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Segurança na Entrega</h3>
              <p className="text-gray-600">Produtos frescos e bem embalados</p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="bg-red-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-red-700 transition-colors shadow-xl flex items-center gap-3 mx-auto hover:scale-105 transform transition-transform"
          >
            <MessageCircle size={28} />
            Fazer Pedido Agora (via WhatsApp)
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection;
