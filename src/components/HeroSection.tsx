import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Award, Users, Play } from 'lucide-react';
import heroImage from '@/assets/hero-wellness.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with modern overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Pessoas praticando atividades de bem-estar e movimento"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Floating elements for modern touch */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Heart className="w-5 h-5 mr-2 text-accent" />
            <span className="text-sm font-medium">Especialistas em Movimento e Bem-Estar</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block">Movimento</span>
            <span className="block text-accent">é vida</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-normal mt-4 text-white/90">
              cuide do seu corpo com quem entende
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Especialistas em fisioterapia esportiva, reabilitação de ombro, coluna e quadril. 
            <br className="hidden md:block" />
            Transforme sua qualidade de vida com nosso atendimento personalizado em Florianópolis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="appointment" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-6 h-auto rounded-full shadow-2xl hover:shadow-accent/20"
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
                className="text-lg px-10 py-6 h-auto rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Modern Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento Humanizado</h3>
              <p className="text-white/80 leading-relaxed">Cuidado personalizado com foco na sua experiência e bem-estar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Técnicas Modernas</h3>
              <p className="text-white/80 leading-relaxed">Equipamentos de última geração e métodos baseados em evidências</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Equipe Especializada</h3>
              <p className="text-white/80 leading-relaxed">Profissionais especializados e constantemente atualizados</p>
            </div>
          </div>
        </div>
      </div>


      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm font-medium">Role para descobrir</span>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;