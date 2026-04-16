import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

const TestimonialsPage = () => {
  const { testimonials } = useSiteData();
  const published = testimonials.filter((t) => t.published);

  return (
    <Layout>
      <SEOHead title="Testimonials" description="Read what our patients say about their experience at Infinity Women Clinic." />

      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Patients Say</h1>
          <p className="text-muted-foreground text-lg">Real stories from real patients who trust us with their care.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {published.map((t) => (
              <Card key={t.id} className="border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
