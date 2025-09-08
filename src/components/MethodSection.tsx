import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Heart, Star } from 'lucide-react';

const MethodSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="method" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Método Nexus – Fisioterapia que{' '}
              <span className="text-accent">transforma</span> sua recuperação
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Na Nexus Fisioterapia, você não recebe apenas um tratamento: recebe um{' '}
                <span className="font-semibold text-primary">método exclusivo</span> que une ciência, 
                acolhimento e autonomia para resultados reais e duradouros.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nossa equipe especializada garante um plano personalizado desde o primeiro contato, 
                com foco em eficiência, independência e qualidade de vida.
              </p>
            </div>

            {/* Call to Action Text */}
            <div className="mt-12 mb-8">
              <p className="text-2xl md:text-3xl font-medium text-primary mb-8 flex items-center justify-center gap-3">
                <span className="text-accent text-3xl">👉</span>
                Recupere seu movimento. Retome seus sonhos. Viva sem limitações.
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              variant="appointment" 
              size="lg"
              onClick={scrollToContact}
              className="text-xl px-12 py-7 h-auto rounded-full shadow-strong hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300"
            >
              Agende sua avaliação agora
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Method Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Método Científico</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tratamentos baseados em evidências e técnicas comprovadas para resultados eficazes
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 gradient-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Cuidado Humanizado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acolhimento e escuta ativa em cada sessão, respeitando suas necessidades individuais
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Resultados Duradouros</h3>
              <p className="text-muted-foreground leading-relaxed">
                Foco na sua autonomia e independência para uma vida plena e sem limitações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;