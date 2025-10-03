import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock,
  CheckCircle
} from 'lucide-react';

const ContactSection = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(48) 3206-8868",
      link: "tel:+5548991820345",
      description: "Ligue para agendamento"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(48) 99182-0345",
      link: "https://wa.me/5548991820345",
      description: "Atendimento rápido e prático"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@nexusfisio.com.br",
      link: "mailto:contato@nexusfisio.com.br",
      description: "Envie sua dúvida"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Capitão Amaro Seixas Ribeiro, 58 - Santa Monica",
      link: "https://maps.google.com/search/Rua+Capit%C3%A3o+Amaro+Seixas+Ribeiro,+58+-+Santa+Monica+Florian%C3%B3polis+-+SC",
      description: "Florianópolis - SC, 88035-300"
    }
  ];

  const openingHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 19:00" },
    { day: "Sábado", hours: "Fechado" },
    { day: "Domingo", hours: "Fechado" }
  ];

  const services = [
    "Fisioterapia Esportiva",
    "Reabilitação de Ombro",
    "Reabilitação de Coluna",
    "Reabilitação de Quadril",
    "Fisioterapia Geriátrica",
    "Avaliação Funcional"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para cuidar da sua saúde. Entre em contato conosco e agende sua consulta. 
            Nossa equipe está à disposição para esclarecer dúvidas e encontrar o melhor tratamento para você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp Contact */}
          <Card className="border-0 shadow-medium bg-card">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Agende pelo WhatsApp
                </h3>
                
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-8 mb-8 border border-green-500/20">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Atendimento Rápido e Prático
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Entre em contato conosco pelo WhatsApp para agendar sua consulta de forma rápida e prática. 
                    Nossa equipe está pronta para atendê-lo e esclarecer todas as suas dúvidas.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Agendamento rápido
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Atendimento humanizado
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Esclarecimento de dúvidas
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Disponível 5 dias por semana
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="https://wa.me/5548991820345?text=Olá! Gostaria de agendar uma consulta na Nexus Fisioterapia." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button 
                      variant="appointment" 
                      size="lg"
                      className="w-full text-lg py-6 h-auto rounded-full shadow-2xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-500 font-medium bg-green-500 hover:bg-green-600"
                    >
                      <MessageCircle className="w-6 h-6 mr-3" />
                      Agendar pelo WhatsApp
                    </Button>
                  </a>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-6">
                  <h5 className="font-semibold text-primary mb-3">Nossos Serviços:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-all duration-300 hover:scale-105 border-0 shadow-soft bg-card"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 gradient-secondary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-primary mb-2">{info.title}</h4>
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-accent hover:text-accent/80 transition-colors font-medium block mb-1"
                    >
                      {info.content}
                    </a>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Opening Hours */}
            <Card className="border-0 shadow-medium bg-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 gradient-secondary rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Horário de Funcionamento</h3>
                </div>
                
                <div className="space-y-3">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-accent font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-0 shadow-medium bg-card">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="text-lg font-bold text-primary mb-2">Nossa Localização</h4>
                    <p className="text-muted-foreground mb-4">Rua Capitão Amaro Seixas Ribeiro, 58 - Santa Monica<br />Florianópolis - SC, 88035-300</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      Ver no Google Maps
                      <MapPin className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <Card className="gradient-hero text-white border-0 shadow-strong">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Atendimento de Urgência</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Para casos urgentes ou emergências, entre em contato conosco imediatamente. 
                Nossa equipe está preparada para atendê-lo quando você mais precisar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+5548991820345">
                  <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;