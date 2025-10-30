import { Card, CardContent } from '@/components/ui/card';
import { 
  Activity, 
  ShieldCheck, 
  Zap, 
  Target,
  HeartHandshake,
  Stethoscope 
} from 'lucide-react';
import { trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

const ServicesSection = () => {
  const services = [
    {
      icon: Activity,
      title: "Fisioterapia Esportiva",
      description: "Prevenção e reabilitação de lesões esportivas, otimização de performance e retorno seguro às atividades físicas.",
      features: [
        "Avaliação biomecânica completa",
        "Prevenção de lesões",
        "Reabilitação especializada",
        "Condicionamento específico"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Reabilitação de Ombro",
      description: "Tratamento especializado para lesões do complexo do ombro, desde tendinites até pós-operatório de cirurgias.",
      features: [
        "Síndrome do impacto",
        "Lesões do manguito rotador",
        "Luxações e subluxações",
        "Pós-operatório de ombro"
      ]
    },
    {
      icon: Zap,
      title: "Reabilitação de Coluna",
      description: "Tratamento conservador e pós-cirúrgico para dores na coluna vertebral e problemas posturais.",
      features: [
        "Hérnia de disco",
        "Lombalgia e cervicalgia",
        "Correção postural",
        "Fortalecimento do core"
      ]
    },
    {
      icon: Target,
      title: "Reabilitação de Quadril",
      description: "Especialização em lesões do quadril, artrose, impacto femoro-acetabular e pós-operatório.",
      features: [
        "Artrose de quadril",
        "Impacto femoro-acetabular",
        "Bursite trocantérica",
        "Pós-operatório de quadril"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Fisioterapia Geriátrica",
      description: "Cuidado especializado para idosos, focando em mobilidade, equilíbrio e qualidade de vida.",
      features: [
        "Prevenção de quedas",
        "Melhora do equilíbrio",
        "Fortalecimento muscular",
        "Manutenção da autonomia"
      ]
    },
    {
      icon: Stethoscope,
      title: "Avaliação Funcional",
      description: "Análise completa da função corporal para diagnóstico preciso e planejamento terapêutico personalizado.",
      features: [
        "Análise de movimento",
        "Testes funcionais",
        "Avaliação postural",
        "Plano de tratamento individualizado"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos tratamentos especializados com foco na sua recuperação e bem-estar. 
            Cada serviço é personalizado de acordo com suas necessidades específicas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:scale-105 border-0 shadow-soft bg-card"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-secondary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Pronto para começar seu tratamento?
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Nossa equipe especializada está preparada para cuidar da sua saúde com o máximo de dedicação e profissionalismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+5548991820345" onClick={() => trackPhoneClick('services_section')}>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-semibold shadow-soft hover:shadow-medium">
                  Ligar Agora
                </button>
              </a>
              <a 
                href="https://wa.me/5548991820345" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('services_section')}
              >
                <button className="px-8 py-4 gradient-secondary text-white rounded-lg hover:scale-105 transition-bounce font-semibold shadow-soft hover:shadow-medium">
                  WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;