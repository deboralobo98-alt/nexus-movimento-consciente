import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Clock, ArrowLeft, User, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useBlogPost } from '@/hooks/useBlogPosts';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = useBlogPost(slug || '');

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d 'de' MMMM, yyyy", { locale: ptBR });
  };

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
              {post.title.replace(/<[^>]*>/g, '')}
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
              <User className="w-4 h-4" />
              {post.author}
            </span>
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

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              className="mb-8 text-muted-foreground hover:text-foreground"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar ao Blog
            </Button>

            {/* Article Content */}
            <article 
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-accent
                prose-img:rounded-xl prose-img:shadow-medium
                prose-blockquote:border-accent prose-blockquote:text-muted-foreground
                prose-hr:border-border"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share / CTA */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="bg-muted rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Gostou do conteúdo?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Agende sua avaliação e comece sua jornada para uma vida mais saudável.
                </p>
                <Button asChild>
                  <a href="https://wa.me/5548991820345" target="_blank" rel="noopener noreferrer">
                    Agendar Avaliação
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
