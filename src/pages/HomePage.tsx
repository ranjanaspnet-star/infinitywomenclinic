import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Shield, Heart, Baby, Stethoscope, Calendar, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useSiteData } from "@/context/SiteDataContext";
import heroBg from "@/assets/hero-bg.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";

const services = [
  { icon: Stethoscope, title: "Routine Gynecology", desc: "Comprehensive annual exams, Pap smears, and preventive screenings." },
  { icon: Baby, title: "Prenatal Care", desc: "Expert care throughout your pregnancy journey from conception to delivery." },
  { icon: Shield, title: "Reproductive Health", desc: "Contraception counseling, fertility evaluations, and family planning." },
  { icon: Heart, title: "Menopause Care", desc: "Personalized management of menopausal symptoms and hormone therapy." },
  { icon: Calendar, title: "PCOS Management", desc: "Specialized diagnosis and holistic treatment plans for PCOS." },
  { icon: Users, title: "Adolescent Gynecology", desc: "Gentle, age-appropriate care for young women's unique health needs." },
];

const HomePage = () => {
  const { content, testimonials, blogs } = useSiteData();
  const publishedTestimonials = testimonials.filter((t) => t.published).slice(0, 3);
  const publishedBlogs = blogs.filter((b) => b.published).slice(0, 3);

  return (
    <Layout>
      <SEOHead
        title="Home"
        description="Infinity Women Clinic - Expert gynecological care in a warm, supportive environment. Book your appointment today."
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-background/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">{content.heroSubtitle}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-200">
              {content.heroTitle}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-400">
              {content.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <Link to="/booking">
                <Button size="lg">Book Appointment</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Women's Healthcare</h2>
            <p className="text-muted-foreground">From routine check-ups to specialized treatments, we offer a full spectrum of gynecological services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Card key={i} className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <svc.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={clinicInterior} alt="Infinity Women Clinic interior" loading="lazy" width={1200} height={800} className="rounded-2xl shadow-medium w-full object-cover aspect-[3/2]" />
            </div>
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">A Clinic Built Around You</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{content.aboutDescription}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { num: "15+", label: "Years Experience" },
                  { num: "10K+", label: "Happy Patients" },
                  { num: "6", label: "Specialists" },
                  { num: "98%", label: "Satisfaction Rate" },
                ].map((stat, i) => (
                  <div key={i} className="bg-accent/50 rounded-xl p-4 text-center">
                    <p className="font-heading text-2xl font-bold text-primary">{stat.num}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline">
                  Read Our Story <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      {publishedTestimonials.length > 0 && (
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Testimonials</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Patients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {publishedTestimonials.map((t) => (
                <Card key={t.id} className="bg-card border-border/50 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                    <p className="font-medium text-foreground text-sm">{t.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/testimonials"><Button variant="outline">View All Testimonials</Button></Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Preview */}
      {publishedBlogs.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Blog</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Health Insights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {publishedBlogs.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.slug}`} className="group">
                  <Card className="h-full border-border/50 shadow-card hover:shadow-medium transition-all">
                    <CardContent className="p-6">
                      <span className="text-xs font-medium text-primary bg-accent px-2 py-1 rounded-full">{blog.category}</span>
                      <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{blog.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{blog.excerpt}</p>
                      <p className="text-xs text-muted-foreground">{blog.date} · {blog.author}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/blog"><Button variant="outline">View All Articles</Button></Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Take the Next Step?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Schedule your appointment today and experience the compassionate, expert care you deserve.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button size="lg" variant="secondary">Book Your Appointment</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
