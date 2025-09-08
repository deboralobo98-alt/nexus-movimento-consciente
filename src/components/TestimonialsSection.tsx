import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ThumbsUp, TrendingUp } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "45 anos",
      condition: "Hérnia de disco",
      rating: 5,
      text: "Depois de meses com dor na coluna, encontrei na Nexus o tratamento que precisava. O André Rogério foi excepcional no meu cuidado. Hoje vivo sem dor e com muito mais qualidade de vida. Recomendo de olhos fechados!",
      treatment: "Reabilitação de Coluna"
    },
    {
      name: "João Santos",
      age: "32 anos",
      condition: "Lesão no ombro",
      rating: 5,
      text: "Sofri uma lesão no ombro praticando tênis. A Camilla me ajudou a recuperar 100% dos movimentos. O atendimento é humanizado e o resultado superou minhas expectativas. Voltei a jogar melhor que antes!",
      treatment: "Reabilitação de Ombro"
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      condition: "Lesão esportiva",
      rating: 5,
      text: "Como corredora, sempre tive problemas com lesões. O André Mateus não só me curou como me ensinou a prevenir futuras lesões. A Nexus mudou minha relação com o esporte. Gratidão eterna!",
      treatment: "Fisioterapia Esportiva"
    },
    {
      name: "Carlos Oliveira",
      age: "58 anos",
      condition: "Pós-cirúrgico quadril",
      rating: 5,
      text: "Após a cirurgia de quadril, estava muito receoso sobre a recuperação. A equipe da Nexus me deu toda confiança e suporte necessário. Hoje caminho normalmente e sem dor. Profissionais excepcionais!",
      treatment: "Reabilitação de Quadril"
    },
    {
      name: "Fernanda Lima",
      age: "35 anos",
      condition: "Dor cervical",
      rating: 5,
      text: "O trabalho home office estava destruindo minha cervical. Na Nexus encontrei não só o tratamento, mas uma reeducação postural completa. Ambiente acolhedor e profissionais altamente qualificados.",
      treatment: "Correção Postural"
    },
    {
      name: "Roberto Ferreira",
      age: "42 anos",
      condition: "Artrose de quadril",
      rating: 5,
      text: "Pensei que teria que conviver com a dor para sempre. A equipe da Nexus me provou o contrário. Hoje tenho uma vida ativa e sem limitações. O cuidado vai muito além da técnica, é humano e eficaz."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nada nos motiva mais do que ver nossos pacientes recuperados e felizes. 
            Confira alguns relatos de quem confiou na Nexus para cuidar da sua saúde.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:scale-105 border-0 shadow-soft bg-card relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                    </div>
                    {testimonial.treatment && (
                      <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                        {testimonial.treatment}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Condição:</strong> {testimonial.condition}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/694c93af-49e3-4519-8bd8-5167b174c087.png"
              alt="Interior real da clínica Nexus Fisioterapia com macas profissionais e equipamentos modernos"
              className="w-full rounded-2xl shadow-strong object-cover h-[400px]"
            />
          </div>

          {/* Right Column - Stats */}
          <div className="order-1 lg:order-2 bg-card rounded-2xl p-12 shadow-medium">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Resultados que Falam por Si
              </h3>
              <p className="text-lg text-muted-foreground">
                Nossa dedicação se reflete na satisfação dos nossos pacientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
              <div className="group">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mr-4">
                    <ThumbsUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    98%
                  </div>
                </div>
                <div className="text-lg text-muted-foreground font-medium">Taxa de satisfação</div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    4.9
                  </div>
                </div>
                <div className="text-lg text-muted-foreground font-medium">Avaliação média</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gradient-hero rounded-2xl p-12 text-white shadow-strong">
            <h3 className="text-3xl font-bold mb-6">
              Faça Parte das Nossas Histórias de Sucesso
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Junte-se aos milhares de pacientes que já transformaram suas vidas conosco. 
              Sua recuperação começa com o primeiro passo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-smooth font-semibold shadow-soft hover:shadow-medium">
                  Falar no WhatsApp
                </button>
              </a>
              <a href="tel:+5548999999999">
                <button className="px-8 py-4 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-smooth font-semibold">
                  Ligar Agora
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;