import { Button } from '@/components/ui/button';
import { trackClick } from '@/lib/analytics';
import { ArrowRight, Trophy, Target, Zap, Users } from 'lucide-react';

const Esportiva = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide uppercase">
              Fisioterapia Esportiva
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              A Nexus é referência em{' '}
              <span className="text-primary">fisioterapia esportiva</span>{' '}
              de alta performance.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Tratamentos especializados para atletas que buscam excelência e recuperação otimizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="https://wa.me/5548991820345?text=Olá! Tenho interesse em fisioterapia esportiva." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={(e) => trackClick('whatsapp', e, 'esportiva_hero')}
                >
                  Agendar Avaliação
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: 'Alta Performance',
                description: 'Protocolos avançados para maximizar seu desempenho esportivo.'
              },
              {
                icon: Target,
                title: 'Precisão',
                description: 'Avaliação biomecânica detalhada para tratamentos personalizados.'
              },
              {
                icon: Zap,
                title: 'Recuperação Rápida',
                description: 'Técnicas modernas para acelerar sua volta às atividades.'
              },
              {
                icon: Users,
                title: 'Equipe Especializada',
                description: 'Profissionais com experiência em atletas de elite.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <feature.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para elevar seu desempenho?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Agende sua avaliação e descubra como podemos ajudar você a alcançar seus objetivos.
          </p>
          <a 
            href="https://wa.me/5548991820345?text=Olá! Gostaria de agendar uma avaliação de fisioterapia esportiva." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={(e) => trackClick('whatsapp', e, 'esportiva_cta')}
            >
              Falar com Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Nexus Fisioterapia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Esportiva;
