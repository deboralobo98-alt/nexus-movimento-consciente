import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ChevronDown } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/93bdecf0-45c3-4b60-92f6-ec22fb293f30.png" 
              alt="Nexus Fisioterapia" 
              className="h-12 mx-auto"
            />
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            A dor no ombro não precisa ser sua companhia diária.{' '}
            <span className="text-primary">Está na hora de tratá-la de verdade.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Na Nexus, oferecemos um tratamento personalizado, baseado em evidências científicas, 
            que vai além do alívio temporário. Aqui, trabalhamos na causa da dor para você se 
            livrar dela de forma duradoura.
          </p>
          
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Quero Avaliar Meu Caso
          </Button>
          
          <button 
            onClick={() => scrollToSection('problema')}
            className="block mx-auto mt-16 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Problema - Isso soa familiar? */}
      <section id="problema" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Isso soa familiar?
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              Você tenta dormir, mas a dor no ombro te impede de relaxar. Cada movimento parece 
              um desafio: levantar o braço, se vestir, treinar… Até tarefas simples, como escovar 
              os dentes, se tornam complicadas.
            </p>
            
            <p className="text-lg leading-relaxed">
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
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Onde a maioria erra
          </h2>
          
          <div className="text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              O problema não é só a dor — é o <strong className="text-foreground">padrão de movimento comprometido</strong>. 
              Muitos tratamentos se concentram apenas em mascarar a dor ou em exercícios genéricos 
              que não corrigem a origem da disfunção: disfunção escapular, desequilíbrio muscular, 
              sobrecarga repetitiva.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold text-foreground text-center py-4">
              A dor é apenas o sintoma. Sem tratar as causas subjacentes, ela vai continuar voltando.
            </p>
          </div>
        </div>
      </section>

      {/* Abordagem Nexus */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            A abordagem Nexus
          </h2>
          <p className="text-xl text-primary font-medium text-center mb-12">
            Profunda, personalizada e embasada em ciência
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
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
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12">
            O que você pode esperar
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Alívio real e progressivo da dor',
              'Retorno seguro às atividades do dia a dia',
              'Melhora na qualidade do sono',
              'Recuperação da confiança para se movimentar e treinar',
              'Autonomia e compreensão do seu corpo e seus limites'
            ].map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que funciona */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Por que funciona?
          </h2>
          
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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
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
                <p className="text-foreground font-semibold">
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
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
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
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
            Sobre a Nexus
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A Nexus é um centro de reabilitação integrativa, especializado em casos complexos 
            e dores persistentes. Nosso time é formado por profissionais experientes em 
            fisioterapia ortopédica, funcional e esportiva, e nosso compromisso é com o 
            resultado real e sustentável para você.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Seu caso merece mais do que gelo e alongamento.
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Merece um plano verdadeiro e personalizado.
          </p>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Quero Avaliar Meu Caso
          </Button>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="py-6 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/lovable-uploads/93bdecf0-45c3-4b60-92f6-ec22fb293f30.png" 
            alt="Nexus Fisioterapia" 
            className="h-8 mx-auto mb-4 opacity-60"
          />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexus Fisioterapia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OmbroLanding;
