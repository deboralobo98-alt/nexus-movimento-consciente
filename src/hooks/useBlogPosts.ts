import { useQuery } from '@tanstack/react-query';
import type { WordPressPost, BlogPostFormatted } from '@/types/blog';

const API_BASE = 'https://nexusfisioterapia.com.br/wp-json/wp/v2';

const calculateReadingTime = (content: string): number => {
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  return Math.ceil(words / 200);
};

const formatPost = (post: WordPressPost): BlogPostFormatted => {
  const featuredImage = 
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || 
    post.jetpack_featured_media_url || 
    '/placeholder.svg';

  const author = post._embedded?.author?.[0]?.name || 'Nexus Fisioterapia';
  
  const categories = post._embedded?.["wp:term"]?.[0]?.map(term => term.name) || [];

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    date: post.date,
    featuredImage,
    author,
    categories,
    readingTime: calculateReadingTime(post.content.rendered),
  };
};

const fetchPosts = async (): Promise<BlogPostFormatted[]> => {
  const response = await fetch(`${API_BASE}/posts?_embed&per_page=12`);
  if (!response.ok) {
    throw new Error('Erro ao carregar posts');
  }
  const posts: WordPressPost[] = await response.json();
  return posts.map(formatPost);
};

const fetchPostBySlug = async (slug: string): Promise<BlogPostFormatted> => {
  const response = await fetch(`${API_BASE}/posts?_embed&slug=${slug}`);
  if (!response.ok) {
    throw new Error('Erro ao carregar post');
  }
  const posts: WordPressPost[] = await response.json();
  if (posts.length === 0) {
    throw new Error('Post não encontrado');
  }
  return formatPost(posts[0]);
};

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};
