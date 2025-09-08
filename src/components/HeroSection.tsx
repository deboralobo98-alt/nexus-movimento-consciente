import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-physiotherapy.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Clínica Nexus Fisioterapia - Ambiente profissional e moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Movimento é vida,
            <br />
            <span className="text-accent">cuide do seu corpo</span>
            <br />
            com quem entende
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Especialistas em fisioterapia esportiva, reabilitação de ombro, coluna e quadril. 
            Atendimento personalizado com técnicas modernas em Florianópolis/SC.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="appointment" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </Button>
            <a 
              href="https://wa.me/5548999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento Humanizado</h3>
              <p className="text-white/80">Cuidado personalizado e acolhimento em cada consulta</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Técnicas Modernas</h3>
              <p className="text-white/80">Equipamentos de última geração e métodos atualizados</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Equipe Especializada</h3>
              <p className="text-white/80">Profissionais especializados em diferentes áreas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;