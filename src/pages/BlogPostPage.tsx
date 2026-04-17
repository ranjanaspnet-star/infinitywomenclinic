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
      <SEOHead title={post.title} description={post.excerpt} keywords={`${post.title.toLowerCase()}, best gynecologist in Maharashtra, women's health article, top women doctor, Dr. Trishna Taralkar, reproductive health blog, women's clinic insights, gynecology news`} />

      <article className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">{post.category}</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">{post.title}</h1>
          <div className="rounded-3xl bg-card p-6 mb-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Expert women's health guidance from Infinity Women Clinic</h2>
            <p className="text-muted-foreground leading-relaxed">
              This article brings you the latest trusted information from our gynecology team in Dombivli. Led by Dr. Trishna Taralkar, our clinic shares practical advice for women looking for the best gynecological care in Maharashtra.
            </p>
          </div>
          <div className="rounded-3xl bg-card p-6 mb-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Women’s health insights from Gynecologists</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              This post is part of our broader coverage of women’s health in Maharashtra, including topics such as complex multiple pregnancy issues, Mirena / Copper-T insertion, and Non descent vaginal hysterectomy (stitchless surgery).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We also discuss White discharge - Leucorrhoea, sexual dysfunctions -- female, laparoscopy for infertility, lactation consultation and guidance, and vaginal rejuvenation tightening (non surgical) so you can make informed decisions with the support of Dr. Trishna Taralkar and our Gynecologist team.
            </p>
          </div>
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
