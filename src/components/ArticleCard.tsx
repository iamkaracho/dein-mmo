'use client';
import { Card, Button } from 'pixel-retroui';

interface Article {
  id: number;
  title: string;
  slug: string;
  teaser?: string;
  published_at?: string;
  image?: string | { id: string };
}

interface Props {
  post: Article;
}

// Helper to get image URL
function getImageUrl(image: string | { id: string } | undefined): string | null {
  if (!image) return null;
  const imageId = typeof image === 'string' ? image : image.id;
  return `https://cms.dein-mmo.de/assets/${imageId}`;
}

export default function ArticleCard({ post }: Props) {
  const imageUrl = getImageUrl(post.image);
  
  return (
    <Card 
      className="p-4"
      bg="#fff"
      textColor="#1A3263"
      borderColor="#1A3263"
      shadowColor="#547792"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h2 className="font-minecraft text-xl mb-2 text-[#1A3263] line-clamp-3">{post.title}</h2>
      {post.teaser && <p className="mb-4 text-[#547792] line-clamp-2">{post.teaser}</p>}
      {post.published_at && (
        <time className="text-sm opacity-70 block mb-4 text-[#547792]">
          {new Date(post.published_at).toLocaleDateString('de-DE')}
        </time>
      )}
      <a href={`/artikel/${post.slug}`}>
        <Button
          bg="#FAB95B"
          textColor="#1A3263"
          shadow="#1A3263"
          borderColor="#1A3263"
        >
          Weiterlesen
        </Button>
      </a>
    </Card>
  );
}
