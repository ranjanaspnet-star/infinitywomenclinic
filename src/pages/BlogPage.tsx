import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { useSiteData } from "@/context/SiteDataContext";

const BlogPage = () => {
  const { blogs } = useSiteData();
  const published = blogs.filter((b) => b.published);

  return (
    <Layout>
      <SEOHead title="Blog" description="Health insights, tips, and articles from Infinity Women Clinic's gynecological experts." />

      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Blog</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Health Insights & Articles</h1>
          <p className="text-muted-foreground text-lg">Stay informed with the latest in women's health from our expert team.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {published.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.slug}`} className="group">
                <Card className="h-full border-border/50 shadow-card hover:shadow-medium transition-all">
                  <CardContent className="p-6">
                    <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">{blog.category}</span>
                    <h2 className="font-heading text-xl font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{blog.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {published.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No articles published yet. Check back soon!</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
