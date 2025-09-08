import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Target } from 'lucide-react';

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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre a Nexus Fisioterapia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma história de superação, dedicação e compromisso com a saúde e bem-estar dos nossos pacientes.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-6">Nossa História</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Clínica Nexus nasceu em um dos períodos mais desafiadores da nossa geração: a pandemia. 
                Naquele momento de incertezas, quatro amigos — <strong>Davi Guerreiro</strong>, <strong>André Matheus</strong>, 
                <strong>Camila Prats</strong> e <strong>André Rogério</strong> — que já trabalhavam juntos decidiram unir forças 
                para transformar dificuldade em oportunidade.
              </p>
              <p>
                O que começou como um passo corajoso se tornou um projeto de vida. Com resiliência, 
                dedicação e muito estudo, fomos amadurecendo nossa forma de cuidar das pessoas, 
                sempre atentos às mudanças do mundo e às necessidades reais dos nossos pacientes.
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-medium">
            <h4 className="text-2xl font-bold text-primary mb-6">De Reab Cefick a Nexus</h4>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Durante anos, fomos conhecidos no bairro como <em>Reab Cefick</em>. Esse nome fez parte da nossa 
                história e é lembrado com muito carinho, pois foi nele que construímos nossa base, 
                conquistamos a confiança dos pacientes e crescemos como equipe.
              </p>
              <p>
                Decidimos, então, mudar o nome para <strong>Nexus Fisioterapia</strong> — um nome que representa 
                melhor quem somos hoje, o que acreditamos e aonde queremos chegar.
              </p>
              <div className="bg-accent/10 p-4 rounded-lg mt-6">
                <p className="text-accent font-semibold">
                  "Nexus" significa ponto de conexão, e é exatamente isso que buscamos: conectar ciência, 
                  tecnologia, humanização e propósito.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16">
          <div className="bg-card rounded-2xl p-12 shadow-medium max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary mb-6">Nossa Missão</h3>
            <p className="text-2xl text-muted-foreground leading-relaxed mb-6">
              Mais do que tratar dores ou reabilitar lesões, a missão da Nexus é clara:
            </p>
            <div className="text-3xl font-bold gradient-hero bg-clip-text text-transparent">
              "Gerar o maior bem-estar possível para nossos pacientes, ajudando-os a viver com liberdade, movimento e saúde."
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

        {/* New Horizon */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white text-center shadow-strong">
          <h3 className="text-3xl font-bold mb-6">Um Novo Horizonte</h3>
          <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
            Hoje, estamos escrevendo uma nova fase da clínica: ampliando nossa equipe, 
            acolhendo novos profissionais, valorizando novas ideias, e expandindo horizontes 
            para levar bem-estar e qualidade de vida a cada paciente que passa por nós.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4+</div>
              <div className="text-white/80">Anos de experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Pacientes atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-white/80">Especialidades</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80">Dedicação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;