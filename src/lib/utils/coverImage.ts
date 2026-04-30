const COVER_BY_CATEGORY: Record<string, string> = {
  blog: "/images/defaults/cover-blog.jpg",
  lifestyle: "/images/defaults/cover-lifestyle.jpg",
};
const FALLBACK_COVER = "/images/defaults/cover-default.jpg";

export const getCoverImage = (post: {
  data: { image?: string; categories?: string[] };
}): string => {
  if (post.data.image) return post.data.image;
  const primary = post.data.categories?.[0];
  return (primary && COVER_BY_CATEGORY[primary]) || FALLBACK_COVER;
};
