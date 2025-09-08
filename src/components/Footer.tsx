import { Heart, MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/afcf1b86-47a7-4a61-a371-577f5f2d6a25.png" 
                alt="Nexus Fisioterapia"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Conectando ciência, tecnologia, humanização e propósito para oferecer 
              experiências de saúde transformadoras em Florianópolis/SC.
            </p>
            <div className="flex items-center text-primary-foreground/80">
              <Heart className="w-4 h-4 mr-2 text-accent" />
              <span className="text-sm">Movimento é vida, cuide do seu corpo com quem entende</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-left"
                >
                  Equipe
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-left"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Especialidades</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Fisioterapia Esportiva</li>
              <li className="text-primary-foreground/80">Reabilitação de Ombro</li>
              <li className="text-primary-foreground/80">Reabilitação de Coluna</li>
              <li className="text-primary-foreground/80">Reabilitação de Quadril</li>
              <li className="text-primary-foreground/80">Fisioterapia Geriátrica</li>
              <li className="text-primary-foreground/80">Avaliação Funcional</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Rua Capitão Amaro Seixas Ribeiro, 58 - Santa Monica<br />
                    Florianópolis - SC, 88035-300
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+554832068868" 
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                >
                  (48) 3206-8868
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="https://wa.me/5548999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                >
                  WhatsApp
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:contato@nexusfisioterapia.com.br" 
                  className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                >
                  contato@nexusfisioterapia.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-5 h-5 text-accent mr-2" />
            <h3 className="text-lg font-bold">Horário de Funcionamento</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Segunda a Sexta</div>
              <div className="text-accent">07:00 - 19:00</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Sábado</div>
              <div className="text-accent">08:00 - 12:00</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <div className="font-semibold mb-1">Domingo</div>
              <div className="text-primary-foreground/60">Fechado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm text-center md:text-left">
              © {currentYear} Nexus Fisioterapia. Todos os direitos reservados.
            </div>
            
            <div className="text-primary-foreground/60 text-sm text-center md:text-right">
              <p>CREFITO: 123456-F | CNPJ: 12.345.678/0001-90</p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-primary-foreground/60 text-xs">
              Desenvolvido com <Heart className="w-3 h-3 inline text-red-400" /> para cuidar da sua saúde
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;