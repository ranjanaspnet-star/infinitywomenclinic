import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useSiteData } from "@/context/SiteDataContext";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPostPage = () => {
  const { slug } = useParams();
  const { blogs } = useSiteData();
  const post = blogs.find((b) => b.slug === slug && b.published);

  if (!post) {
    return (
      <Layout>
        <SEOHead title="Post Not Found" description="The requested blog post could not be found." />
        <section className="py-32 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog"><Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog</Button></Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead title={post.title} description={post.excerpt} />

      <article className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">{post.category}</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">{para}</p>
            ))}
          </div>

          <div className="mt-12 p-8 bg-hero-gradient rounded-2xl text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Have Questions?</h3>
            <p className="text-muted-foreground mb-4">Schedule a consultation with our experts.</p>
            <Link to="/booking"><Button>Book Appointment</Button></Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
