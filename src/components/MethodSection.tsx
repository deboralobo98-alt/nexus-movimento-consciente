import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Heart, Star, CheckCircle } from 'lucide-react';

const MethodSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Recupere seu movimento",
    "Retome seus sonhos", 
    "Viva sem limitações"
  ];

  return (
    <section id="method" className="py-20 pb-10 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border border-accent/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-accent/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-accent/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 mr-2 text-accent" />
              <span className="text-accent font-semibold">Método Exclusivo</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Método Nexus
            </h2>
            <p className="text-2xl md:text-3xl text-accent font-medium mb-8">
              Fisioterapia que <span className="text-primary font-bold">transforma</span> sua recuperação
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Na Nexus Fisioterapia, você não recebe apenas um tratamento: recebe um{' '}
                  <span className="font-semibold text-primary bg-accent/10 px-2 py-1 rounded">método exclusivo</span> que une ciência, 
                  acolhimento e autonomia para resultados reais e duradouros.
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Nossa equipe especializada garante um plano personalizado desde o primeiro contato, 
                  com foco em eficiência, independência e qualidade de vida.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-soft">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-primary">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="appointment" 
                size="lg"
                onClick={scrollToContact}
                className="text-xl px-12 py-7 h-auto rounded-full shadow-strong hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                Agende sua avaliação agora
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>

            {/* Right Column - Method Features */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 border border-accent/10">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Método Científico</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tratamentos baseados em evidências e técnicas comprovadas para resultados eficazes e mensuráveis
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 border border-accent/10">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Cuidado Humanizado</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Acolhimento e escuta ativa em cada sessão, respeitando suas necessidades individuais
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-medium hover:shadow-strong transition-shadow duration-300 border border-accent/10">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Resultados Duradouros</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Foco na sua autonomia e independência para uma vida plena e sem limitações
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;