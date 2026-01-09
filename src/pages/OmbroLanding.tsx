import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ChevronDown, Phone, Clock, Mail, ArrowUpRight, Star, Calendar, Sparkles, Activity, Moon, Dumbbell, Brain } from 'lucide-react';
import { useState } from 'react';

const OmbroLanding = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação para dor no ombro.";

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Quantas sessões são necessárias?",
      answer: "Depende do seu caso, mas já na primeira consulta você sai com um plano claro de tratamento."
    },
    {
      question: "Posso continuar minhas atividades enquanto faço o tratamento?",
      answer: "Sim, adaptamos o plano para que você continue ativo de forma segura."
    },
    {
      question: "E se o tratamento não funcionar?",
      answer: "Acompanhamos de perto o seu progresso. Se necessário, reavaliamos e ajustamos o tratamento para buscar melhores resultados."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="bg-[#0a1628] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img 
            src="/lovable-uploads/logo-nexus-sem-fundo.png" 
            alt="Nexus Fisioterapia" 
            className="h-10 md:h-12 brightness-0 invert"
          />
          
          <Button 
            size="lg" 
            className="bg-[#2a9d8f] hover:bg-[#238b7e] text-white rounded-full px-6 py-3 font-semibold"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Agendar Avaliação
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#0f1d32] pt-8 pb-32 md:pb-40 overflow-visible min-h-[90vh] lg:min-h-0">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 lg:hidden">
          <img 
            src="/lovable-uploads/hero-ombro-tratamento.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f1d32]/80" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#2a9d8f]/10 rounded-full blur-3xl hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2a9d8f]/5 rounded-full blur-3xl hidden lg:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-6 pt-8 lg:pt-0">
              <div className="inline-flex items-center gap-2 bg-[#2a9d8f]/20 border border-[#2a9d8f]/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-[#2a9d8f] rounded-full animate-pulse" />
                <span className="text-[#2a9d8f] text-sm font-medium">Tratamento Especializado</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight font-playfair">
                A dor no ombro não precisa ser sua companhia diária.<br />
                <span className="text-[#2a9d8f]">Está na hora de tratá-la de verdade.</span>
              </h1>
              
              <p className="text-base text-gray-300 max-w-xl leading-relaxed">
                Na Nexus, oferecemos um tratamento personalizado, baseado em evidências científicas, 
                que vai além do alívio temporário. Aqui, trabalhamos na causa da dor para você 
                se livrar dela de forma duradoura.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-[#2a9d8f] hover:bg-[#238b7e] text-white rounded-full px-8 py-6 text-lg font-semibold group"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Quero Avaliar Meu Caso
                  <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 rounded-full px-8 py-6 text-lg"
                  onClick={() => scrollToSection('sobre-tratamento')}
                >
                  Ver Tratamento
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#2a9d8f]" />
                  <span className="text-gray-300 text-sm">+500 pacientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#2a9d8f]" />
                  <span className="text-gray-300 text-sm">10+ anos experiência</span>
                </div>
              </div>
            </div>
            
            {/* Right Image Card */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/hero-ombro-tratamento.jpeg"
                  alt="Fisioterapeuta realizando tratamento de ombro"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d32]/40 to-transparent" />
              </div>
              
              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#2a9d8f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">MF</span>
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-snug">
                      "Recuperei 100% do movimento do meu ombro após apenas 8 sessões."
                    </p>
                    <p className="text-gray-500 text-xs mt-1">Maria F. - Paciente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section - Outside hero to prevent clipping */}
      <section className="relative z-20 -mt-20 md:-mt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {/* Card Horário */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2a9d8f]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-[#2a9d8f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 20h</p>
                  <p className="text-gray-600 text-sm">Sábado: 8h às 14h</p>
                </div>
              </div>
            </div>
            
            {/* Card Agende */}
            <div className="bg-[#2a9d8f] rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Agende sua Avaliação</h3>
                  <p className="text-white/80 text-sm mb-3">Avaliação completa + plano de tratamento</p>
                  <Button 
                    size="sm"
                    className="bg-white text-[#2a9d8f] hover:bg-gray-100 rounded-full text-sm font-medium"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Agendar Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Isso soa familiar? */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left - Blue Card with Heading */}
            <div className="bg-gradient-to-b from-[#0f1d32] to-[#1a2d4a] rounded-3xl p-6 md:p-10 text-white flex items-center justify-center min-h-[150px] md:min-h-[300px] relative overflow-hidden">
              {/* Decorative element */}
              <img 
                src="/lovable-uploads/decorative-element.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none"
              />
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white text-center leading-tight relative z-10">
                Isso soa familiar?
              </h2>
            </div>
            
            {/* Right - Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#2a9d8f]/10 border border-[#2a9d8f]/30 rounded-full px-4 py-2 w-fit mb-6">
                <span className="w-2 h-2 bg-[#2a9d8f] rounded-full" />
                <span className="text-[#2a9d8f] text-sm font-medium">Reconheça os sinais</span>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Você tenta dormir, mas a dor no ombro te impede de relaxar. Cada movimento parece 
                um desafio: levantar o braço, se vestir, treinar… Até tarefas simples, como escovar 
                os dentes, se tornam complicadas.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Você já tentou de tudo: repouso, gelo, remédios, fisioterapia... mas, no fim das 
                contas, a dor sempre volta.
              </p>
              
              <p className="text-foreground font-medium text-lg italic mb-8">
                Na maioria dos casos, isso não acontece porque você não tentou o suficiente.
                A verdade é que você provavelmente nunca recebeu um plano real de reabilitação.
              </p>
              
              <Button 
                size="lg" 
                className="bg-[#2a9d8f] hover:bg-[#238b7e] text-white rounded-full px-8 py-6 text-lg font-semibold w-fit group"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Quero Mudar Isso
                <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Onde a maioria erra */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">O problema real</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
              Onde a maioria erra
            </h2>
          </div>
          
          <div className="text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              O problema não é só a dor — é o <strong className="text-foreground">padrão de movimento comprometido</strong>. 
              Muitos tratamentos se concentram apenas em mascarar a dor ou em exercícios genéricos 
              que não corrigem a origem da disfunção: disfunção escapular, desequilíbrio muscular, 
              sobrecarga repetitiva.
            </p>
            
            <div className="bg-[#0f1d32] text-white p-8 rounded-2xl text-center">
              <p className="text-xl font-semibold">
                A dor é apenas o sintoma. Sem tratar as causas subjacentes, ela vai continuar voltando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Abordagem Nexus */}
      <section id="abordagem" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa metodologia</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
              A abordagem Nexus: profunda, personalizada e embasada em ciência
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Nosso primeiro passo é entender você de verdade. Na primeira consulta, fazemos uma avaliação completa:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Na primeira consulta, fazemos:
              </h3>
              <ul className="space-y-4">
                {[
                  'Histórico clínico e funcional',
                  'Análise de exames e imagens (se houver)',
                  'Avaliação do movimento e padrões compensatórios',
                  'Entendimento da sua rotina, limites e objetivos'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Seu plano pode incluir:
              </h3>
              <ul className="space-y-4">
                {[
                  'Terapia manual para restaurar a mobilidade articular',
                  'Exercícios terapêuticos progressivos, pensados para seu corpo',
                  'Reeducação do padrão de movimento',
                  'Treinamento funcional controlado',
                  'Eletroterapia (quando necessário)',
                  'Orientações para melhorar a postura, o sono e a rotina diária'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que você pode esperar */}
      <section className="py-20 px-4 bg-[#0f1d32]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/fisio-tratamento-resultados.jpeg"
                alt="Tratamento de fisioterapia"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d32]/60 to-transparent" />
            </div>
            
            {/* Right - Content */}
            <div>
              <span className="text-[#2a9d8f] font-semibold text-sm uppercase tracking-wider">Resultados</span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mt-2 mb-10">
                O que você pode esperar
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Sparkles, text: 'Alívio real e progressivo da dor' },
                  { icon: Activity, text: 'Retorno seguro às atividades do dia a dia' },
                  { icon: Moon, text: 'Melhora na qualidade do sono' },
                  { icon: Dumbbell, text: 'Recuperação da confiança para se movimentar e treinar' },
                  { icon: Brain, text: 'Autonomia e compreensão do seu corpo e seus limites' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#2a9d8f]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[#2a9d8f]" />
                      </div>
                      <p className="text-white font-medium text-lg pt-2">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nosso diferencial</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
              Por que funciona?
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 rounded-3xl text-center">
            <p className="text-xl md:text-2xl text-foreground font-medium mb-6">
              Porque aqui tratamos <span className="text-primary">pessoas</span>, não apenas sintomas.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nosso trabalho é baseado em evidências científicas e, acima de tudo, em escuta ativa. 
              Cada caso é único, e nossa missão é te ajudar a se livrar da dor com segurança, 
              sem promessas vazias.
            </p>
            
            <p className="text-foreground font-semibold text-lg">
              Nosso objetivo não é que você dependa da gente, mas que você se liberte da dor 
              com conhecimento e movimento consciente.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é / O que não fazemos */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Para quem é este tratamento?
              </h3>
              <ul className="space-y-4">
                {[
                  'Para quem sente dor ao levantar o braço, deitar ou praticar atividades físicas.',
                  'Para quem já passou por tratamentos que não deram resultados.',
                  'Para quem quer evitar cirurgia, mas de forma segura e planejada.',
                  'Para quem busca uma solução duradoura, e não um alívio temporário.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                E o que não fazemos:
              </h3>
              <ul className="space-y-4">
                {[
                  'Não prometemos soluções rápidas ou milagrosas.',
                  'Não aplicamos protocolos genéricos. Cada pessoa é única.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-foreground font-semibold flex items-center gap-2">
                  <span className="text-primary">💚</span>
                  Nosso compromisso: integridade, ciência e cuidado humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Dúvidas</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Nexus */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Quem somos</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
            Sobre a Nexus
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Nexus é um centro de reabilitação integrativa, especializado em casos complexos 
            e dores persistentes. Nosso time é formado por profissionais experientes em 
            fisioterapia ortopédica, funcional e esportiva, e nosso compromisso é com o 
            resultado real e sustentável para você.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-[#0f1d32] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 text-primary opacity-20">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <rect x="35" y="10" width="30" height="80" rx="4" />
            <rect x="10" y="35" width="80" height="30" rx="4" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-24 h-24 text-primary opacity-20">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <rect x="35" y="10" width="30" height="80" rx="4" />
            <rect x="10" y="35" width="80" height="30" rx="4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Seu caso merece mais do que gelo e alongamento.
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Merece um plano verdadeiro e personalizado.
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 mx-auto bg-primary hover:bg-primary/90"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Quero Avaliar Meu Caso
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

    </div>
  );
};

export default OmbroLanding;
