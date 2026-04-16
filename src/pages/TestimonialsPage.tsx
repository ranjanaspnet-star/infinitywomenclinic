import { useState } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useSiteData } from "@/context/SiteDataContext";

const TestimonialsPage = () => {
  const { testimonials } = useSiteData();
  const published = testimonials.filter((t) => t.published);
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? published : published.slice(0, 8);
  const averageRating = published.length > 0 ? (published.reduce((sum, t) => sum + t.rating, 0) / published.length).toFixed(1) : "0.0";

  return (
    <Layout>
      <SEOHead title="Testimonials" description="Read what our patients say about their experience at Infinity Women Clinic." keywords="patient testimonials, women's clinic reviews, gynecologist feedback, Infinity Women Clinic experience, patient satisfaction" />

      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr,360px] items-start">
            <div className="max-w-2xl">
              <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Testimonials</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Trusted care, confident patients.</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Discover why women choose Infinity Women Clinic for compassionate, expert care. These real patient stories show the comfort, confidence, and successful outcomes we deliver at every visit.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-card p-6 text-center shadow-sm border border-border/50">
                  <p className="text-3xl font-heading font-bold text-primary">{averageRating}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mt-2">Average Rating</p>
                </div>
                <div className="rounded-3xl bg-card p-6 text-center shadow-sm border border-border/50">
                  <p className="text-3xl font-heading font-bold text-primary">{published.length}+</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mt-2">Patient reviews</p>
                </div>
                <div className="rounded-3xl bg-card p-6 text-center shadow-sm border border-border/50">
                  <p className="text-3xl font-heading font-bold text-primary">95%</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mt-2">Recommend us</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-background/70 border border-border/50 p-8 shadow-xl backdrop-blur-xl">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-accent text-primary mb-6">
                <Quote className="h-8 w-8" />
              </div>
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">A patient favorite</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "The care I received at Infinity Women Clinic was exceptional. Dr. Trishna made me feel completely at ease during what can be an anxiety-inducing visit. The staff is warm, professional, and truly caring."
              </p>
              <div className="space-y-4">
                <div className="rounded-3xl bg-card p-4">
                  <p className="text-sm text-muted-foreground">"Personalized attention from the entire team made all the difference. The clinic felt safe, welcoming, and competent."</p>
                  <p className="mt-3 text-sm font-semibold text-foreground">— Ritu Gupta</p>
                </div>
                <div className="rounded-3xl bg-card p-4">
                  <p className="text-sm text-muted-foreground">"They listened to my concerns and created a treatment plan that actually worked. I recommend them to every friend."</p>
                  <p className="mt-3 text-sm font-semibold text-foreground">— Asha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleTestimonials.map((t) => (
              <Card key={t.id} className="border-border/50 shadow-card transition-all hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-full overflow-hidden border border-border/60">
                      <img src={t.avatar ?? "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"} alt={t.name} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{t.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">“{t.text}”</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {published.length > visibleTestimonials.length && (
            <div className="mt-10 text-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
                onClick={() => setShowAll(true)}
              >
                View all {published.length} reviews
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
