import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(48) 3206-8868",
      link: "tel:+554832068868",
      description: "Ligue para agendamento"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(48) 99999-9999",
      link: "https://wa.me/5548999999999",
      description: "Atendimento rápido e prático"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@nexusfisioterapia.com.br",
      link: "mailto:contato@nexusfisioterapia.com.br",
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
    { day: "Segunda a Sexta", hours: "07:00 - 19:00" },
    { day: "Sábado", hours: "08:00 - 12:00" },
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
          {/* Contact Form */}
          <Card className="border-0 shadow-medium bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Solicite seu Agendamento
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">Mensagem Enviada!</h4>
                  <p className="text-muted-foreground">
                    Entraremos em contato em breve para confirmar seu agendamento.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(48) 3206-8868"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre sua condição ou dúvidas..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="appointment" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitação
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios. Entraremos em contato em até 24 horas.
                  </p>
                </form>
              )}
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
                <a href="tel:+554832068868">
                  <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </Button>
                </a>
                <a href="https://wa.me/5548999999999" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp 24h
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