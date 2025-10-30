import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { trackAppointmentClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3207bc2f-91c0-46c3-9af2-c1aca7873ca6.png" 
              alt="Nexus Fisioterapia"
              className="h-7 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="tel:+5548991820345" 
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              onClick={() => trackPhoneClick('header')}
            >
              <Phone className="w-4 h-4" />
              <span>(48) 3206-8868</span>
            </a>
            <a 
              href="https://wa.me/5548991820345"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-smooth"
              onClick={() => trackWhatsAppClick('header')}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <Button 
              variant="appointment" 
              size="sm"
              onClick={() => {
                trackAppointmentClick('header');
                scrollToSection('contact');
              }}
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Equipe
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Contato
              </button>
              
              {/* Mobile Contact Actions */}
              <div className="px-4 py-2 space-y-3 border-t border-border mt-4 pt-4">
                <a 
                  href="tel:+5548991820345" 
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                  onClick={() => trackPhoneClick('header_mobile')}
                >
                  <Phone className="w-4 h-4" />
                  <span>(48) 3206-8868</span>
                </a>
                <a 
                  href="https://wa.me/5548991820345" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-accent"
                  onClick={() => trackWhatsAppClick('header_mobile')}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <Button 
                  variant="appointment" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    trackAppointmentClick('header_mobile');
                    scrollToSection('contact');
                  }}
                >
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;