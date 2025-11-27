
const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "On Slow Creativity",
      date: "March 15, 2024",
      excerpt: "Thoughts on taking time with the creative process and finding beauty in patience",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "The Art of Matcha Making",
      date: "March 8, 2024",
      excerpt: "How the ritual of making matcha influences my creative practice",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Garden Inspiration",
      date: "February 28, 2024",
      excerpt: "Finding color palettes and organic shapes in nature's design",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Music and Visual Harmony",
      date: "February 20, 2024",
      excerpt: "Exploring the connection between sound and visual aesthetics",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Embracing Pastels",
      date: "February 10, 2024",
      excerpt: "Why soft colors create spaces of calm in both art and life",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4">Blog</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Reflections on creativity, gentle aesthetics, and the art of slow living
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="dreamy-card cursor-pointer">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-3 text-primary hover:text-primary/80 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="hidden md:block w-24 h-24 bg-gradient-matcha rounded-2xl flex-shrink-0" />
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
