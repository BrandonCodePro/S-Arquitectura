import React from 'react';
import { Compass, Home, Phone, Mail, CheckCircle2, Building2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Modern luxury home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <Compass className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">S Arquitectura</span>
          </div>
          <div className="flex items-center space-x-6 text-white">
            <a href="#servicios" className="hover:text-gray-300">Servicios</a>
            <a href="#nosotros" className="hover:text-gray-300">Nosotros</a>
            <a href="#contacto" className="hover:text-gray-300">Contacto</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Especialistas en Construcción de Viviendas Llave en Mano
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Construimos tu hogar soñado con los más altos estándares de calidad y materiales premium
          </p>
          <a href="#contacto" className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Consultar Ahora
          </a>
        </div>
      </header>

      {/* Modalidades Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestras Modalidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Obra Gris</h3>
              <p className="text-gray-600 mb-4">600 USD + IVA /m²</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Materiales premium incluidos
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Para obras mayores a 200 M²
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Llave en Mano Premium</h3>
              <p className="text-gray-600 mb-4">800 USD + IVA /m²</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Servicio integral completo
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  Acabados de primera calidad
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Diseño del proyecto",
              "Renderizado del proyecto",
              "Planos del proyecto",
              "Dirección de obra",
              "Movimiento de suelo",
              "Fundaciones y bases",
              "Instalaciones sanitarias",
              "Instalaciones eléctricas",
              "Piscinas y parquización"
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="h-8 w-8 text-gray-700 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Proyecto 1" 
                 className="rounded-lg shadow-lg h-80 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                 alt="Proyecto 2" 
                 className="rounded-lg shadow-lg h-80 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Contactanos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-gray-600 mr-4" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-gray-600 mr-4" />
                <span>info@sarquitectura.com</span>
              </div>
              <div className="flex items-center">
                <Home className="h-6 w-6 text-gray-600 mr-4" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <textarea 
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Compass className="h-6 w-6" />
            <span className="ml-2 text-xl font-bold">S Arquitectura</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 S Arquitectura. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;