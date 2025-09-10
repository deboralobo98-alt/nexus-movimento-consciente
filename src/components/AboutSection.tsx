import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Target, BookOpen, Lightbulb, UserCheck, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Humanização",
      description: "Cada consulta é guiada pelo respeito, escuta ativa e vontade genuína de ajudar nossos pacientes."
    },
    {
      icon: Users,
      title: "Trabalho em Equipe",
      description: "Uma equipe unida e especializada, sempre em busca da excelência no atendimento."
    },
    {
      icon: Award,
      title: "Excelência Científica",
      description: "Utilizamos as técnicas mais modernas baseadas em evidências científicas atualizadas."
    },
    {
      icon: Target,
      title: "Resultados Efetivos",
      description: "Nosso foco é gerar o maior bem-estar possível, ajudando você a retomar seus sonhos."
    }
  ];

  return (
    <section id="about" className="pt-10 pb-20 bg-muted/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-accent/10 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 mr-2 text-primary" />
            <span className="text-primary font-semibold">Nossa História</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre a Nexus Fisioterapia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma história de superação, dedicação e compromisso com a saúde e bem-estar dos nossos pacientes.
          </p>
        </div>

        {/* Story Section with Team Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/441fe8f0-c3c6-431a-94c1-73d1dcccdafe.png"
                alt="Equipe Nexus no COBRAFITO 2025 - Congresso Brasileiro de Fisioterapia"
                className="w-full rounded-2xl shadow-strong object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-2xl shadow-strong">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-6 h-6" />
                  <span className="font-semibold">Sempre atualizados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Nossa Jornada</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  A Clínica Nexus nasceu em um dos períodos mais desafiadores da nossa geração: a pandemia. 
                  Naquele momento de incertezas, quatro amigos — <span className="font-semibold text-primary">Davi Guerreiro</span>, 
                  <span className="font-semibold text-primary"> André Matheus</span>, <span className="font-semibold text-primary">Camilla Prats</span> e 
                  <span className="font-semibold text-primary"> André Rogério</span> — que já trabalhavam juntos decidiram unir forças 
                  para transformar dificuldade em oportunidade.
                </p>
                <p>
                  O que começou como um passo corajoso se tornou um projeto de vida. Com resiliência, 
                  dedicação e muito estudo, fomos amadurecendo nossa forma de cuidar das pessoas, 
                  sempre atentos às mudanças do mundo e às necessidades reais dos nossos pacientes.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-medium border border-accent/10">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-accent" />
                Compromisso com o Conhecimento
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe participa regularmente de congressos e eventos científicos, como o COBRAFITO, 
                garantindo que nossos pacientes sempre recebam tratamentos baseados nas mais recentes evidências científicas.
              </p>
            </div>
          </div>
        </div>

        {/* Transformation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-medium border border-primary/10">
            <h4 className="text-2xl font-bold text-primary mb-6">De Reab Cefick a Nexus</h4>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Durante anos, fomos conhecidos no bairro como <em className="text-accent font-medium">Reab Cefick</em>. 
                Esse nome fez parte da nossa história e é lembrado com muito carinho, pois foi nele que construímos nossa base, 
                conquistamos a confiança dos pacientes e crescemos como equipe.
              </p>
              <p>
                Decidimos, então, mudar o nome para <span className="font-bold text-primary">Nexus Fisioterapia</span> — 
                um nome que representa melhor quem somos hoje, o que acreditamos e aonde queremos chegar.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20">
            <div className="text-center">
              <div className="w-16 h-16 gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">O Significado de "Nexus"</h4>
              <p className="text-lg text-accent font-semibold mb-4">Ponto de Conexão</p>
              <p className="text-muted-foreground leading-relaxed">
                Conectamos ciência, tecnologia, humanização e propósito para oferecer não apenas tratamentos, 
                mas experiências de saúde transformadoras.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16">
          <div className="bg-card rounded-2xl p-12 shadow-strong max-w-5xl mx-auto border border-primary/10">
            <h3 className="text-3xl font-bold text-primary mb-6">Nossa Missão</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Mais do que tratar dores ou reabilitar lesões, a missão da Nexus é clara:
            </p>
            <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white">
              <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed">
                "Gerar o maior bem-estar possível para nossos pacientes, ajudando-os a viver com liberdade, movimento e saúde."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:scale-105 border-0 shadow-soft bg-card text-center"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-secondary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* New Horizon - Completely redesigned */}
        <div className="relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-32 h-32 border border-primary/10 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-accent/10 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-16 text-white shadow-strong relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">Um Novo Horizonte</h3>
                <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Nossa jornada é construída com pessoas dedicadas e resultados que transformam vidas
                </p>
              </div>

              {/* Main Features Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Equipe Multidisciplinar */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-4 text-white">4</div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Especialistas</h4>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Equipe multidisciplinar especializada em diferentes áreas da fisioterapia
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <span className="font-medium leading-tight">Fisioterapia Esportiva</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <span className="font-medium leading-tight">Reabilitação de Ombro</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <span className="font-medium leading-tight">Coluna e Quadril</span>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <span className="font-medium leading-tight">Cuidado Integral</span>
                    </div>
                  </div>
                </div>

                {/* Pacientes Atendidos */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold mb-4 text-white">+8000</div>
                  <h4 className="text-2xl font-bold mb-4 text-white">Pacientes Atendidos</h4>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    Mais de 500 vidas transformadas através de cuidado especializado e humanizado
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <span className="text-sm font-medium">Taxa de Satisfação</span>
                      <span className="text-sm font-bold">98%</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                      <span className="text-sm font-medium">Avaliação Média</span>
                      <span className="text-sm font-bold">4.9★</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="text-center">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30">
                  <TrendingUp className="w-6 h-6 mr-3 text-white" />
                  <span className="text-lg font-semibold text-white">Crescendo e evoluindo a cada dia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;