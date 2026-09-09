// Converts a youtu.be/watch?v= URL into an embeddable youtube.com/embed URL.
// Falls back to returning the URL unchanged if it doesn't match either shape.
export function toYoutubeEmbedUrl(url: string): string {
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  const watchMatch = url.match(/[?&]v=([^?&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  return url;
}

export function isYoutubeUrl(url: string): boolean {
  return /youtu\.?be/.test(url);
}
