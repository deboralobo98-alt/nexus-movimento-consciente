import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ChevronDown, Phone, Clock, Mail, ArrowUpRight } from 'lucide-react';
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
      <div className="bg-[#0a1628] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+5511999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>+55 11 99999-9999</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Seg - Sex: 8:00 - 20:00</span>
            </span>
          </div>
          <a href="mailto:contato@nexusfisio.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 text-primary" />
            <span>contato@nexusfisio.com.br</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-[#0f1d32] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1d32] via-[#0f1d32] to-transparent z-10" />
          
          {/* Decorative cross/plus shape */}
          <div className="absolute top-1/4 right-1/3 w-32 h-32 text-primary opacity-80 z-20">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <rect x="35" y="10" width="30" height="80" rx="4" />
              <rect x="10" y="35" width="80" height="30" rx="4" />
            </svg>
          </div>
          
          {/* Wave patterns */}
          <svg className="absolute bottom-0 right-0 w-1/2 h-full opacity-20" viewBox="0 0 400 600" fill="none">
            <path d="M100,600 Q150,400 100,200 Q50,0 100,0" stroke="currentColor" strokeWidth="2" className="text-primary" fill="none" />
            <path d="M200,600 Q250,400 200,200 Q150,0 200,0" stroke="currentColor" strokeWidth="2" className="text-primary" fill="none" />
            <path d="M300,600 Q350,400 300,200 Q250,0 300,0" stroke="currentColor" strokeWidth="2" className="text-primary" fill="none" />
          </svg>

          {/* Background image placeholder area */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1d32] to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
              alt="Fisioterapeuta profissional"
              className="w-full h-full object-cover object-center opacity-60"
            />
          </div>
        </div>

        {/* Header */}
        <header className="relative z-30 py-6 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img 
              src="/lovable-uploads/93bdecf0-45c3-4b60-92f6-ec22fb293f30.png" 
              alt="Nexus Fisioterapia" 
              className="h-10"
            />
            <Button 
              className="hidden md:flex items-center gap-2 bg-transparent border-2 border-primary text-white hover:bg-primary hover:text-primary-foreground transition-all rounded-full px-6"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Agendar Avaliação
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 pt-16 pb-24">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8">
              <span className="text-primary text-xl">💚</span>
              <span className="text-white text-sm font-medium">TRATAMENTO ESPECIALIZADO</span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              A dor no ombro não precisa ser sua companhia diária.{' '}
              <span className="text-primary">Está na hora de tratá-la de verdade.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Na Nexus, oferecemos um tratamento personalizado, baseado em evidências científicas, 
              que vai além do alívio temporário. Aqui, trabalhamos na causa da dor para você se 
              livrar dela de forma duradoura.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 bg-primary hover:bg-primary/90"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Quero Avaliar Meu Caso
                <ArrowUpRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all flex items-center gap-2"
                onClick={() => scrollToSection('abordagem')}
              >
                Ver Tratamento
                <ArrowUpRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="hidden lg:block absolute top-1/4 right-8 max-w-sm bg-[#1a2d47] rounded-2xl p-6 border border-white/10">
            <p className="text-gray-300 italic mb-4">
              "Minha missão é tratar cada paciente com cuidado, respeito e o mais alto padrão de conhecimento em fisioterapia."
            </p>
            <p className="text-primary font-semibold">— Equipe Nexus</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-4 -mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground text-sm">Segunda - Sexta: 8:00 - 20:00</p>
                  <p className="text-muted-foreground text-sm">Sábado: 8:00 - 14:00</p>
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-6 shadow-xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Agende sua Avaliação</h3>
                  <a href="tel:+5511999999999" className="text-white/90 text-lg font-semibold hover:text-white transition-colors">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for overlapping cards */}
      <div className="h-24 bg-background" />

      {/* Problema - Isso soa familiar? */}
      <section id="problema" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Você se identifica?</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
              Isso soa familiar?
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              Você tenta dormir, mas a dor no ombro te impede de relaxar. Cada movimento parece 
              um desafio: levantar o braço, se vestir, treinar… Até tarefas simples, como escovar 
              os dentes, se tornam complicadas.
            </p>
            
            <p className="leading-relaxed">
              Você já tentou de tudo: repouso, gelo, remédios, fisioterapia... mas, no fim das 
              contas, <strong className="text-foreground">a dor sempre volta.</strong>
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl my-8">
              <p className="text-foreground font-medium text-lg mb-0">
                Na maioria dos casos, isso não acontece porque você não tentou o suficiente.
                <br />
                <span className="text-primary">A verdade é que você provavelmente nunca recebeu um plano real de reabilitação.</span>
              </p>
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
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossa metodologia</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
              A abordagem Nexus
            </h2>
            <p className="text-xl text-muted-foreground mt-4">
              Profunda, personalizada e embasada em ciência
            </p>
          </div>
          
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
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resultados</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mt-2 mb-12">
            O que você pode esperar
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '✨', text: 'Alívio real e progressivo da dor' },
              { icon: '🏃', text: 'Retorno seguro às atividades do dia a dia' },
              { icon: '😴', text: 'Melhora na qualidade do sono' },
              { icon: '💪', text: 'Recuperação da confiança para se movimentar e treinar' },
              { icon: '🧠', text: 'Autonomia e compreensão do seu corpo e seus limites' }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <p className="text-white font-medium">{item.text}</p>
              </div>
            ))}
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

      {/* Footer mínimo */}
      <footer className="py-8 px-4 bg-[#0a1628] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/lovable-uploads/93bdecf0-45c3-4b60-92f6-ec22fb293f30.png" 
            alt="Nexus Fisioterapia" 
            className="h-8 mx-auto mb-4"
          />
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nexus Fisioterapia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OmbroLanding;
