import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Davi Guerreiro Marostica",
      role: "Especialista em tratamento da dor e movimento",
      image: "/lovable-uploads/f863f7e6-52ac-4d27-bcde-816bf612edce.png",
      description: "Referência na integração entre ciência e prática clínica, com foco em cuidado humanizado e inovação em fisioterapia.",
      expertise: [
        "Integração ciência e prática",
        "Cuidado humanizado",
        "Inovação em fisioterapia",
        "Gestão clínica"
      ]
    },
    {
      name: "André Mateus de Amorim Laurentino",
      role: "Especialista em Fisioterapia Esportiva",
      image: "/lovable-uploads/0e966561-6870-4fba-9766-b1d7dfb5f60d.png",
      description: "Especialista em fisioterapia esportiva, atua na prevenção e recuperação de atletas recreativos e de alto rendimento, ajudando-os a manter desempenho e qualidade de vida.",
      expertise: [
        "Fisioterapia esportiva",
        "Prevenção de lesões",
        "Atletas de alto rendimento",
        "Performance e qualidade de vida"
      ]
    },
    {
      name: "Camilla Prats Vila",
      role: "Especialista em Reabilitação de Ombro",
      image: "/lovable-uploads/0eb5c253-0a11-4861-939c-99187299705e.png",
      description: "Especialista em reabilitação de ombro, atende pacientes com lesões, pós-operatórios e limitações funcionais, com foco em devolver mobilidade e autonomia.",
      expertise: [
        "Reabilitação de ombro",
        "Pós-operatórios",
        "Limitações funcionais",
        "Mobilidade e autonomia"
      ]
    },
    {
      name: "André Rogério Abreu",
      role: "Especialista em Coluna e Quadril",
      image: "/lovable-uploads/b6dc7a40-2e0f-45b8-bfc8-2649c4e1a6e1.png",
      description: "Especialista em coluna e quadril, trabalha na reabilitação de dores crônicas e pós-cirúrgicos, priorizando movimento seguro e melhora da funcionalidade.",
      expertise: [
        "Reabilitação de coluna",
        "Reabilitação de quadril",
        "Dores crônicas",
        "Movimento seguro e funcionalidade"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
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
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
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
                    {member.role}
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
            Nossa filosofia
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
            Acreditamos que o cuidado vai além da técnica. Nossa equipe é unida pela paixão em transformar vidas, 
            sempre priorizando a escuta ativa, o respeito ao paciente e a busca constante por conhecimento.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">+500</span>
              </div>
              <h4 className="font-bold text-primary mb-2">Pacientes Atendidos</h4>
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