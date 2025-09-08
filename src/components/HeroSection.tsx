import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Award, Users, Play } from 'lucide-react';
import heroImage from '@/assets/hero-dynamic.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dynamic overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Pessoa praticando atividade física ao ar livre com energia e vitalidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/60 to-accent/70"></div>
      </div>

      {/* Dynamic geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-white/20 rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 border-2 border-accent/30 rounded-2xl -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/10 rounded-xl rotate-45 animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/10 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Elegant badge */}
          <div className="inline-flex items-center bg-accent/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-accent/30">
            <Heart className="w-5 h-5 mr-3 text-accent" />
            <span className="text-lg font-medium tracking-wide">Excelência • Precisão • Cuidado</span>
          </div>

          {/* Elegant heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 leading-none tracking-tight">
            <span className="block font-extralight animate-fade-in-up">Sua jornada</span>
            <span className="block text-accent text-6xl md:text-8xl lg:text-9xl font-bold animate-fade-in-up animation-delay-200">de recuperação</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-6 text-white/95 animate-fade-in-up animation-delay-400">
              começa com especialistas dedicados
            </span>
          </h1>

          {/* Elegant subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            Fisioterapia esportiva e reabilitação especializada com técnicas avançadas
            <br className="hidden md:block" />
            <span className="text-accent font-medium">Transformamos limitações em conquistas</span> no coração de Florianópolis
          </p>

          {/* Elegant CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="appointment" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-10 py-6 h-auto rounded-full shadow-2xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-500 font-medium"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a 
              href="https://wa.me/5548999999999" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-10 py-6 h-auto rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 font-medium"
              >
                Falar no WhatsApp
                <Play className="w-5 h-5 ml-2" />
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