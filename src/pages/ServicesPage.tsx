import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServicesPage = () => {
  return (
    <Layout>
      <SEOHead title="Services" description="Explore comprehensive gynecological services at Infinity Women Clinic — from routine exams to specialized treatments." keywords="gynecological services, women's health services, best gynecologist in Maharashtra, top women doctor, routine gynecology, prenatal care, reproductive health, menopause care, PCOS management, adolescent gynecology, women's clinic near me" />
      
      <section className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Women's Healthcare</h1>
          <p className="text-muted-foreground text-lg">We offer a full range of gynecological services to support your health at every stage of life.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Why choose our gynecology services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our team delivers expert women’s health care at every stage — from adolescent gynecology to menopause management. Dr. Trishna Taralkar is known as one of the best gynecologists in Maharashtra, and our clinic in Dombivli provides compassionate, evidence-based care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <Card key={svc.slug} className="group hover:shadow-medium transition-all border-border/50">
                <CardContent className="p-8 flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <svc.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <Link to={`/services/${svc.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80">
                      Learn more
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Have Questions About Our Services?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">We're here to help. Schedule a consultation to discuss your specific needs.</p>
          <Link to="/booking"><Button size="lg" variant="secondary">Schedule Consultation</Button></Link>
        </div>
      </section>

      <section className="py-20 bg-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Advanced Gynecology Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Specialized Care for Thane and Beyond</h2>
            <p className="text-muted-foreground leading-relaxed">
              Infinity Women Clinic offers advanced services including Mirena / Copper-T insertion, stitchless Non descent vaginal hysterectomy, and laparoscopic infertility care. Our Gynecologist & Obstetrician Doctors also treat complex multiple pregnancy issues, White discharge - Leucorrhoea, female sexual dysfunctions, and provide lactation consultation and vaginal rejuvenation tightening with a gentle approach.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Reproductive Health</h3>
              <p className="text-muted-foreground leading-relaxed">Our Gynecologist team supports infertility with laparoscopy, handles Mirena / Copper-T insertion, and offers lactation consultation and guidance to help mothers thrive.</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Women’s Wellness</h3>
              <p className="text-muted-foreground leading-relaxed">From White discharge - Leucorrhoea treatment to sexual dysfunctions -- female care and vaginal rejuvenation tightening (non surgical), our clinic provides discreet women’s health solutions for Thane patients.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
