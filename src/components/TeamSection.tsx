import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import andreMateus from '@/assets/andre-mateus.jpg';
import camillaPrats from '@/assets/camilla-prats.jpg';
import andreRogerio from '@/assets/andre-rogerio.jpg';

const TeamSection = () => {
  const team = [
    {
      name: "André Mateus",
      specialty: "Fisioterapia Esportiva",
      image: andreMateus,
      description: "Especialista em prevenção e reabilitação de lesões esportivas. Formado com pós-graduação em Fisioterapia Esportiva, possui vasta experiência no acompanhamento de atletas recreativos e profissionais.",
      expertise: [
        "Biomecânica esportiva",
        "Prevenção de lesões",
        "Reabilitação funcional",
        "Performance atlética"
      ]
    },
    {
      name: "Camilla Prats",
      specialty: "Reabilitação de Ombro",
      image: camillaPrats,
      description: "Especialista em disfunções do complexo do ombro. Possui formação avançada em terapia manual e técnicas específicas para tratamento conservador e pós-operatório do ombro.",
      expertise: [
        "Síndrome do impacto",
        "Manguito rotador",
        "Terapia manual",
        "Pós-operatório de ombro"
      ]
    },
    {
      name: "André Rogério",
      specialty: "Reabilitação de Coluna e Quadril",
      image: andreRogerio,
      description: "Especialista em disfunções da coluna vertebral e quadril. Formação em técnicas de estabilização segmentar e método Pilates, com foco em correção postural e fortalecimento do core.",
      expertise: [
        "Disfunções da coluna",
        "Reabilitação de quadril",
        "Correção postural",
        "Estabilização segmentar"
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Profissionais especializados, dedicados e apaixonados pelo que fazem. 
            Cada membro da nossa equipe traz expertise única para cuidar da sua saúde.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-500 hover:scale-105 border-0 shadow-soft bg-card overflow-hidden"
            >
              <div className="relative">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.specialty}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Contact Info on Hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center space-x-4">
                    <a 
                      href="mailto:contato@nexusfisioterapia.com.br" 
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a 
                      href="tel:+5548999999999" 
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Name and Specialty */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-lg font-semibold text-accent">
                    {member.specialty}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Expertise */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Especialidades:</h4>
                  <ul className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Philosophy */}
        <div className="bg-card rounded-2xl p-12 shadow-medium text-center">
          <h3 className="text-3xl font-bold text-primary mb-6">
            Filosofia da Nossa Equipe
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
            Acreditamos que o cuidado vai além da técnica. Nossa equipe é unida pela paixão em transformar vidas, 
            sempre priorizando a escuta ativa, o respeito ao paciente e a busca constante por conhecimento.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4+</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Anos Juntos</h4>
              <p className="text-muted-foreground">Uma equipe consolidada e experiente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Dedicação</h4>
              <p className="text-muted-foreground">Comprometimento total com seus resultados</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">∞</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Aprendizado</h4>
              <p className="text-muted-foreground">Sempre atualizados com as melhores práticas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;