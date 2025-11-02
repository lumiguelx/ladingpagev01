import { MapPin, Clock } from 'lucide-react';

function LocationSection() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">Onde</span> Estamos
          </h2>
          <p className="text-gray-600 text-lg">
            Venha nos visitar ou localize-nos no mapa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-gray-700">
                    Rua Exemplo, 123
                    <br />
                    Bairro Centro
                    <br />
                    São Paulo - SP, 01234-567
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="text-gray-700 space-y-1">
                    <p>
                      <strong>Segunda a Sábado:</strong> 8h às 22h
                    </p>
                    <p>
                      <strong>Domingo:</strong> 8h às 20h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">Entre em Contato</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Telefone:</strong> (11) 9999-9999
                </p>
                <p>
                  <strong>WhatsApp:</strong> (11) 99999-9999
                </p>
                <p>
                  <strong>Email:</strong> contato@superyama.com.br
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977882187347!2d-46.65402368538888!3d-23.56133098467882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1635000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização Super Yama Supermercados"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
