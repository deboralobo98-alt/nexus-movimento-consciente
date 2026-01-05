import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const Blog = () => {
  const { data: posts, isLoading, error } = useBlogPosts();

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d 'de' MMMM, yyyy", { locale: ptBR });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').trim();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/lovable-uploads/358c886a-9a41-43fb-80a2-5b4c00b84033.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-primary-foreground/80 uppercase border border-primary-foreground/20 rounded-full">
            Saúde • Bem-estar • Movimento
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Nosso <em className="font-serif not-italic">Blog</em>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            Dicas, novidades e conteúdos exclusivos sobre fisioterapia, 
            saúde e qualidade de vida para você.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <span className="px-3 py-1 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded">
              Artigos Recentes
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Últimas do Blog
            </h2>
          </div>

          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-soft">
                  <Skeleton className="aspect-video w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">Erro ao carregar posts do blog.</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Tentar novamente
              </Button>
            </div>
          )}

          {posts && posts.length > 0 && (
            <div className="space-y-12">
              {/* Featured Post */}
              <Link 
                to={`/blog/${posts[0].slug}`}
                className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                    <img 
                      src={posts[0].featuredImage} 
                      alt={posts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    {posts[0].categories.length > 0 && (
                      <span className="inline-block self-start px-3 py-1 mb-4 text-xs font-semibold text-accent bg-accent/10 rounded">
                        {posts[0].categories[0]}
                      </span>
                    )}
                    <h3 
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-smooth"
                      dangerouslySetInnerHTML={{ __html: posts[0].title }}
                    />
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {stripHtml(posts[0].excerpt)}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{formatDate(posts[0].date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {posts[0].readingTime} min de leitura
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Other Posts Grid */}
              {posts.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                        />
                      </div>
                      <div className="p-6">
                        {post.categories.length > 0 && (
                          <span className="inline-block px-2 py-1 mb-3 text-xs font-semibold text-accent bg-accent/10 rounded">
                            {post.categories[0]}
                          </span>
                        )}
                        <h3 
                          className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-smooth"
                          dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {stripHtml(post.excerpt)}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{formatDate(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
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
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Cuide da sua saúde com quem entende
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
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
