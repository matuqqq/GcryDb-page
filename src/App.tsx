import React, { useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import ServiceGrid  from '../modules/service-grid';

declare global {
  interface Window {
    FB: any;
    instgrm: any;
  }
}
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Facebook, Instagram } from 'lucide-react';


const loadFacebookSDK = () => {
  const script = document.createElement('script');
  script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
  script.async = true;
  script.defer = true;
  script.crossOrigin = 'anonymous';
  document.body.appendChild(script);
};

// Función para cargar el script de Instagram
const loadInstagramEmbed = () => {
  const script = document.createElement('script');
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  document.body.appendChild(script);
};


function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    // Cargar SDKs cuando el componente se monta
    loadFacebookSDK();
    loadInstagramEmbed();

    // Recargar los widgets cuando los scripts estén listos
    const reloadWidgets = () => {
      if (window.FB) window.FB.XFBML.parse();
      if (window.instgrm) window.instgrm.Embeds.process();
    };

    // Intentar recargar los widgets cada segundo hasta que los SDKs estén listos
    reloadWidgets();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex header items-center justify-between h-16">
            <div className="flex-shrink-0">
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#main" className="px-3 py-2 bg-black/20 rounded-lg  text-white hover:text-green-600">Inicio</a>
                <a href="#services" className="px-3 py-2 bg-black/20 rounded-lg text-white hover:text-green-600">Servicios</a>
                <a href="#partners" className="px-3 py-2 bg-black/20 rounded-lg text-white hover:text-green-600">Socias</a>
                <a href="#news" className="text-white hover:text-green-600 px-3 py-2 bg-black/20 rounded-lg">Novedades</a>
                <a href="#contact" className="text-white hover:text-green-600 px-3 py-2  bg-black/20 rounded-lg">Contacto</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#main" className="text-gray-800 block px-3 py-2">Inicio</a>
              <a href="#services" className="text-gray-800 block px-3 py-2">Servicios</a>
              <a href="#partners" className="text-gray-800 block px-3 py-2">Socias</a>
              <a href="#news" className="text-gray-800 block px-3 py-2">Novedades</a>
              <a href="#contact" className="text-gray-800 block px-3 py-2">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="main" className="relative h-screen bg-cover bg-[top_center] bg-no-repeat" style={{ backgroundImage: "url('../media/hero.jpg')" }}>
      <div className="absolute inset-0 hero "></div>
        <div className="relative w-full h-full flex bg-black/50 items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
            <img src="../media/logo.png" alt="GCR&DB Logo" className="w-{226px} md:w-25 mb-8" />
            <h1 className="hero-font text-2xl md:text-4xl mb-5 text-white"> 
              Dra. Guillermina Cerutti Ricaldoni
              <span className="block text-3xl mt-1">&</span>
              Dra. Daniela Bertoncello
            </h1>
            <p className="text-md text-white">ABOGADAS (UBA)</p>
            <div className="w-full h-1 bg-gray-300 my-8 bg-green-900 "></div>
            <a
              href="#info"
              className="inline-flex  items-center text-lg border border-white text-white px-3 py-1 hover:bg-green-900 transition-colors"
            >
              <span className='font-sans'>
              + INFO
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="services" className="services-section my-20">
      <h2 className="text-7xl font-bold text-center mb-12 text-green-900">Nuestros Servicios</h2>

      <ServiceGrid />
      </section>

      {/* About Section */}
      <section id="partners" className="about-section py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 sm:mb-12 text-green-900">
          Quiénes somos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="prose prose-lg animate-on-scroll">
            <div className="w-full flex justify-center">
              <img
                src="../media/abogadas.jpg"
                alt="Nuestras abogadas"
                className="w-full sm:w-4/5 lg:w-3/4 rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="service-card animate-on-scroll p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Dra. Guillermina Cerutti Ricaldoni
                </h3>
                <p className="text-sm sm:text-base">Abogada UBA - 1.999</p>
                <p className="text-sm sm:text-base">Mediadora CALM</p>
                <p className="text-sm sm:text-base">11.6475.7788</p>
              </div>
              <div className="service-card animate-on-scroll p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Dra. Daniela Bertoncello
                </h3>
                <p className="text-sm sm:text-base">Abogada UBA - 2.005</p>
                <p className="text-sm sm:text-base">Mediadora CABA</p>
                <p className="text-sm sm:text-base">11.5525.8983</p>
              </div>
            </div>
          </div>
          <div className="poppins-font prose prose-lg animate-on-scroll space-y-4 mt-8 lg:mt-0">
            <p className="text-sm sm:text-base">
              El estudio GCR fue fundado en el año 2.001 en forma unipersonal por la Dra. Cerutti Ricaldoni hasta la incorporación de la Dra. Bertoncello en 2.005 conformando hasta el día de hoy el equipo de trabajo del estudio GCR&DB. Junto a demás colegas especializados en diversas aéreas, nos dedicamos al derecho de manera colaborativa y multidisciplinaria para abordar la consulta de cada cliente de forma personalizada y así poner a su disposición el mejor equipo profesional para su caso en especial.
            </p>
            <p className="text-sm sm:text-base">
              En nuestra experiencia es posible lograr un buen acuerdo en la mayoría de las áreas del derecho, que beneficie a las partes involucradas con las herramientas de comunicación y negociación que recibimos en nuestra formación de post grado en mediación prejudicial.
            </p>
            <p className="text-sm sm:text-base">
              Como engranajes del sistema de justicia estamos convencidas que el abordaje del conflicto desde esta perspectiva, establece las bases para una sociedad más justa.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section id="news" className="pt-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full">
            <div className="flex items-center mb-6">
              <Instagram className="h-8 w-8 text-pink-600" />
              <h2 className="text-2xl font-bold ml-2">Instagram Feed</h2>
            </div>
            <div className="space-y-6 w-full overflow-hidden">
              {/* Instagram Embed */}
              <div className="instagram-container relative w-full pb-[120%] sm:pb-[100%] md:pb-[120%]">
                <blockquote 
                  className="instagram-media absolute top-0 left-0 w-full h-full" 
                  data-instgrm-permalink="https://www.instagram.com/p/CBy1zWNl1dp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  data-instgrm-version="14"
                  style={{ 
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '0',
                    padding: '0',
                    width: '100%',
                    height: '100%'
                  }}
                >
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="w-full">
            <div className="flex items-center mb-6">
              <Facebook className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold ml-2">Facebook Feed</h2>
            </div>
            <div className="space-y-6 w-full overflow-hidden">
              {/* Facebook Embed */}
              <div className="facebook-container relative w-full">
                <div 
                  className="fb-page absolute top-0 left-0 w-full h-full " 
                  data-href="https://www.facebook.com/GCRyDB/"
                  data-tabs="timeline"
                  data-width=""
                  data-height=""
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote 
                    cite="https://www.facebook.com/GCRyDB/"
                    className="fb-xfbml-parse-ignore"
                    style={{ 
                      background: '#FFF',
                      border: '0',
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '0',
                      padding: '0',
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <a href="https://www.facebook.com/GCRyDB/">Meta</a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-900 mb-3">Contacto</h2>
          <div className="w-20 h-1 bg-green-800 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Estudio GCR&DB se encuentra a disposición para responder sus consultas
          </p>
        </div>

        {/* WhatsApp and Social Media Section */}
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {/* WhatsApp Contacts */}
            {[
              { text: "11.6475.7788", type: "WhatsApp" },
              { text: "11.5525.8983", type: "WhatsApp" }
            ].map((contact, index) => (
              <a
                key={index}
                href={`https://wa.me/${contact.text.replace(/\./g, '')}`}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-800 group-hover:bg-green-800 group-hover:text-white transition-colors duration-300">
                    <WhatsAppIcon fontSize="large" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{contact.type}</p>
                    <p className="font-medium text-gray-800 text-sm">{contact.text}</p>
                  </div>
                </div>
              </a>
            ))}
            
            {/* Social Media Links */}
            {[
              { icon: <Facebook size={24} />, type: "Facebook", href: "https://www.facebook.com/GCRyDB/", arroba: "@GCRyDB" },
              { icon: <Instagram size={24} />, type: "Instagram", href: "https://www.instagram.com/gcr_db", arroba: "@gcr_db" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-800 group-hover:bg-green-800 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                  <div>
                  <p className="text-xs text-gray-500">{social.type}</p>
                  <p className="font-medium text-gray-800 text-sm">{social.arroba}</p>	
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Column */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-green-800" size={28} />
                <h3 className="text-2xl font-semibold text-gray-800">Envíenos su consulta</h3>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                    placeholder="Ingrese su nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                    placeholder="Ingrese su teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
                    placeholder="Escriba su consulta aquí..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-900 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Map and Contact Info Column */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4530274190347!2d-58.5702869235019!3d-34.643260259589056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7efa7113c31%3A0x49f42f4eced4c9cb!2sEVE%2C%20Alsina%20259%2C%20B1704%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1740109088784!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <a href="tel:+541146541556">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full text-green-800">
                    <Phone size={40} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Teléfono</p>
                    <p className="font-medium text-gray-800 text-sm">11.4654.1556</p>
                  </div>
                </div>
                  </a>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <a href="mailmailto:estudio@gcrydb.com.ar">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full text-green-800">
                    <Mail size={40} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium text-gray-800 text-sm">estudio@gcrydb.com.ar</p>
                  </div>
                </div>
                  </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* Addresses Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Lavalle 1607 CABA (C1048AAM)",
            "Alsina 259, Ramos Mejía, Bs As. (B1704EVE)"
          ].map((address, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full text-green-800">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-800 text-sm">{address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1164757788"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors hover:scale-110 transform duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
                    <WhatsAppIcon className="text-white" fontSize="large" />
                    </a>
    </div>
  );
}

export default App;