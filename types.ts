export type MediaType = 'SERMON' | 'ARTICLE' | 'AUDIO' | 'VIDEO';

export interface MediaItem {
  id: string;
  type: MediaType;
  title: string;
  description: string; // Used for excerpt or short description
  content?: string; // HTML content for articles, or extended description for media
  url?: string; // Video or Audio URL
  imageUrl: string;
  author: string; // Speaker or Author
  authorRole?: string;
  date: string;
  durationOrReadTime: string; // "45 mins", "5 min read", etc.
  category: string; // Series name or Topic
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface Cause {
  id: string;
  title: string;
  category: string;
  image: string;
  raised: number;
  goal: number;
  description: string;
  content?: string; // HTML content for the full article page
}

export interface AIResponse {
  text: string;
  error?: string;
}

export enum MinistryTab {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  WORK = 'WORK',
  MEDIA = 'MEDIA', // Now encompasses Sermons, Blog, Podcasts
  MEDIA_DETAIL = 'MEDIA_DETAIL',
  CONTACT = 'CONTACT',
  GIVING = 'GIVING',
  ASSISTANT = 'ASSISTANT',
  CAUSES = 'CAUSES',
  CAUSE_DETAILS = 'CAUSE_DETAILS',
  EVENTS = 'EVENTS'
}

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  series: string;
}

export type BlogType = 'ARTICLE' | 'AUDIO' | 'VIDEO';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  type: BlogType;
  mediaUrl?: string;
}
