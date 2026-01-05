import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Mail, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useBlogPost, useBlogPosts } from '@/hooks/useBlogPosts';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = useBlogPost(slug || '');
  const { data: allPosts } = useBlogPosts();

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d 'de' MMMM, yyyy", { locale: ptBR });
  };

  const formatDateShort = (dateString: string) => {
    return format(new Date(dateString), "d MMM yyyy", { locale: ptBR });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '').trim();
  };

  // Get related posts (same category or random if no category match)
  const relatedPosts = allPosts?.filter(p => p.slug !== slug).slice(0, 2) || [];

  // Extract headings for table of contents
  const extractHeadings = (content: string) => {
    const regex = /<h[2-3][^>]*>(.*?)<\/h[2-3]>/gi;
    const matches = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      matches.push(stripHtml(match[1]));
    }
    return matches.slice(0, 4); // Limit to 4 items
  };

  const tableOfContents = post ? extractHeadings(post.content) : [];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post ? stripHtml(post.title) : '';

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <Skeleton className="h-[400px] w-full" />
          <div className="container mx-auto px-4 py-12">
            <Skeleton className="h-10 w-3/4 mb-6" />
            <Skeleton className="h-6 w-1/2 mb-12" />
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-muted-foreground mb-8">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar ao Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-8">
            <Link to="/blog" className="hover:text-primary-foreground transition-smooth">
              Blog
            </Link>
            <span>/</span>
            {post.categories.length > 0 && (
              <>
                <span>{post.categories[0]}</span>
                <span>/</span>
              </>
            )}
            <span className="text-primary-foreground/40 truncate max-w-[200px]">
              {stripHtml(post.title)}
            </span>
          </nav>

          {post.categories.length > 0 && (
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-accent-foreground bg-accent rounded">
              {post.categories[0]}
            </span>
          )}
          
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 max-w-4xl"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime} min de leitura
            </span>
          </div>
        </div>
      </section>

      {/* Content Section - Two Column Layout */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10">
            {/* Main Content */}
            <div>
              {/* Back Button */}
              <button 
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium mb-10 transition-smooth"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao blog
              </button>

              {/* Article Content */}
              <article 
                className="prose prose-lg max-w-none
                  prose-headings:font-playfair prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-ul:my-4 prose-ol:my-4
                  prose-li:marker:text-accent prose-li:my-1
                  prose-img:rounded-xl prose-img:shadow-medium
                  prose-blockquote:border-accent prose-blockquote:text-muted-foreground prose-blockquote:italic
                  prose-hr:border-border"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Share2 className="w-4 h-4" />
                    Compartilhar:
                  </span>
                  <div className="flex items-center gap-2">
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-smooth"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-smooth"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-accent hover:text-primary-foreground transition-smooth"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Nexus Fisioterapia</h4>
                    <p className="text-sm text-accent mb-2">Equipe de Especialistas</p>
                    <p className="text-sm text-muted-foreground">
                      Especialistas dedicados a compartilhar conhecimento e ajudar você a cuidar melhor da sua saúde.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Newsletter Box */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Newsletter</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Receba conteúdos exclusivos sobre saúde e bem-estar diretamente no seu e-mail.
                </p>
                <Input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  className="mb-3"
                />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Inscrever-se
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-bold text-foreground mb-4">Neste artigo</h3>
                  <ul className="space-y-2">
                    {tableOfContents.map((heading, index) => (
                      <li key={index}>
                        <span className="text-sm text-muted-foreground hover:text-accent cursor-pointer transition-smooth">
                          {heading}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-10">
              Artigos Relacionados
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={relatedPost.featuredImage} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                    />
                    {relatedPost.categories.length > 0 && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary/80 backdrop-blur-sm rounded-full">
                        {relatedPost.categories[0]}
                      </span>
                    )}
                  </div>
                  <h3 
                    className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-smooth line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: relatedPost.title }}
                  />
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {stripHtml(relatedPost.excerpt)}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDateShort(relatedPost.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {relatedPost.readingTime} min
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-accent rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-accent-foreground mb-4">
              Gostou do conteúdo?
            </h3>
            <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
              Agende sua avaliação e comece sua jornada para uma vida mais saudável.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://wa.me/5548991820345" target="_blank" rel="noopener noreferrer">
                Agendar Avaliação
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
