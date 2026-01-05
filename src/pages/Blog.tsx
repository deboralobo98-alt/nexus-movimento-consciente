import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import heroBlog from '@/assets/hero-blog.jpg';

const Blog = () => {
  const { data: posts, isLoading, error } = useBlogPosts();

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d MMM yyyy", { locale: ptBR });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').trim();
  };

  // Extract unique categories from posts
  const categories = posts 
    ? [...new Set(posts.flatMap(p => p.categories))].filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Matching reference exactly */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBlog}
            alt="Pessoa praticando yoga em ambiente natural"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/50 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center py-32">
          <span className="inline-block px-6 py-2.5 mb-8 text-sm font-medium tracking-wide text-primary-foreground border border-primary-foreground/40 rounded-full bg-primary-foreground/5 backdrop-blur-sm">
            Saúde • Bem-estar • Movimento
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8">
            Nosso <em className="font-serif italic font-normal">Blog</em>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Conteúdo especializado sobre fisioterapia, reabilitação e qualidade de vida 
            para você cuidar do seu corpo com conhecimento.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block px-3 py-1.5 mb-4 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded">
                Artigos Recentes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Últimas do Blog
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Conteúdo atualizado semanalmente com as melhores dicas e informações sobre fisioterapia.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <div>
              {isLoading && (
                <div className="space-y-8">
                  {/* Featured skeleton */}
                  <div className="bg-card rounded-3xl overflow-hidden shadow-soft">
                    <div className="grid md:grid-cols-2 gap-0">
                      <Skeleton className="aspect-[4/3] md:aspect-auto md:h-full" />
                      <div className="p-8 space-y-4">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-8 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  </div>
                  {/* Grid skeleton */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-soft">
                        <Skeleton className="aspect-video w-full" />
                        <div className="p-6 space-y-3">
                          <Skeleton className="h-5 w-20" />
                          <Skeleton className="h-6 w-full" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <div className="text-center py-16 bg-card rounded-3xl">
                  <p className="text-destructive mb-4">Erro ao carregar posts do blog.</p>
                  <Button variant="outline" onClick={() => window.location.reload()}>
                    Tentar novamente
                  </Button>
                </div>
              )}

              {posts && posts.length > 0 && (
                <div className="space-y-10">
                  {/* Featured Post - Larger card */}
                  <Link 
                    to={`/blog/${posts[0].slug}`}
                    className="group block bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                        <img 
                          src={posts[0].featuredImage} 
                          alt={posts[0].title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                        />
                        <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold text-primary-foreground bg-accent rounded-full flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          Em Destaque
                        </span>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        {posts[0].categories.length > 0 && (
                          <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-bold tracking-wider text-accent uppercase">
                            {posts[0].categories[0]}
                          </span>
                        )}
                        <h3 
                          className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-smooth leading-tight"
                          dangerouslySetInnerHTML={{ __html: posts[0].title }}
                        />
                        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                          {stripHtml(posts[0].excerpt)}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span>{formatDate(posts[0].date)}</span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {posts[0].readingTime} min
                          </span>
                        </div>
                        <div className="mt-6 pt-6 border-t border-border">
                          <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                            Ler artigo completo
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Other Posts Grid - 2 columns */}
                  {posts.length > 1 && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {posts.slice(1).map((post) => (
                        <Link 
                          key={post.id}
                          to={`/blog/${post.slug}`}
                          className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
                        >
                          <div className="aspect-video overflow-hidden">
                            <img 
                              src={post.featuredImage} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                            />
                          </div>
                          <div className="p-6">
                            {post.categories.length > 0 && (
                              <span className="inline-block px-2.5 py-1 mb-3 text-xs font-bold tracking-wider text-accent uppercase">
                                {post.categories[0]}
                              </span>
                            )}
                            <h3 
                              className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-smooth leading-snug"
                              dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {stripHtml(post.excerpt)}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                              <span>{formatDate(post.date)}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readingTime} min
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-lg font-bold text-foreground mb-5">Categorias</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-primary-foreground bg-accent rounded-xl hover:bg-accent/90 transition-smooth">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Todos
                    </span>
                    <span className="text-xs bg-primary-foreground/20 px-2 py-0.5 rounded-full">
                      {posts?.length || 0}
                    </span>
                  </button>
                  {categories.map((category) => (
                    <button 
                      key={category}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-smooth"
                    >
                      <span>{category}</span>
                      <span className="text-xs text-muted-foreground/60">
                        {posts?.filter(p => p.categories.includes(category)).length || 0}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-primary rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold text-primary-foreground mb-3">
                  Receba nossas dicas
                </h3>
                <p className="text-sm text-primary-foreground/70 mb-5">
                  Assine nossa newsletter e receba conteúdo exclusivo sobre saúde e bem-estar.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/5548991820345" target="_blank" rel="noopener noreferrer">
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Cuide da sua saúde com quem entende
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Agende sua avaliação e descubra como a fisioterapia pode transformar sua qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="group"
              asChild
            >
              <a href="https://wa.me/5548991820345" target="_blank" rel="noopener noreferrer">
                Agendar Avaliação
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/">
                Conheça a Nexus
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
