import { Button } from '@/components/ui/button';
import { trackClick } from '@/lib/analytics';
import { ArrowRight, Trophy, Target, Zap, Users } from 'lucide-react';
import athleteHero from '@/assets/athlete-hero.jpg';

const Esportiva = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1d1e3c]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={athleteHero} 
            alt="Atleta de alta performance" 
            className="w-full h-full object-cover opacity-60 lg:object-[15%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1d1e3c] via-[#1d1e3c]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1e3c] via-transparent to-[#1d1e3c]/30" />
        </div>
        
        {/* Logo */}
        <div className="absolute top-6 left-4 md:left-8 z-20">
          <img 
            src="/lovable-uploads/da52acbd-9df7-4eef-b616-5a5f275e7dbb.png" 
            alt="Nexus Fisioterapia"
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 pt-28">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 bg-[#6aabb1] text-white rounded text-[9px] md:text-xs font-bold tracking-widest uppercase">
              Parceria Exclusiva
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Atletas RedMob,
              <br />
              <span className="text-white">levem sua performance</span>
              <br />
              a outro nível
            </h1>
            
            <p className="text-sm md:text-xl text-white/70 max-w-xl leading-relaxed">
              Tenha o acompanhamento de especialistas em Fisioterapia Esportiva focados em <strong className="text-white font-semibold">prevenir lesões</strong>, <strong className="text-white font-semibold">acelerar sua recuperação</strong> e <strong className="text-white font-semibold">otimizar seus resultados</strong> dentro e fora da academia.
            </p>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/5548991820345?text=Olá! Sou atleta RedMob e tenho interesse em fisioterapia esportiva." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                  onClick={(e) => trackClick('whatsapp', e, 'esportiva_hero')}
                >
                  Agendar Avaliação Agora
                  <ArrowRight className="ml-3 h-5 w-5" />
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
